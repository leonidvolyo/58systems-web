import React, { useRef, useState } from "react";
import { ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xbdorlgv";

const ProcessAnalysisCTA = () => {
  const { t, lang } = useLanguage();
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [activeChip, setActiveChip] = useState(null);
  const messageRef = useRef(null);

  function handleChip(chip) {
    setActiveChip(chip.id);
    if (messageRef.current) {
      // Only overwrite if user hasn't typed something themselves
      if (!messageRef.current.value || messageRef.current.dataset.fromChip === "true") {
        messageRef.current.value = chip.prefill || "";
        messageRef.current.dataset.fromChip = "true";
      }
      messageRef.current.focus({ preventScroll: true });
      messageRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.target);

    // Helpful subject line for the inbox
    if (!formData.get("_subject")) {
      formData.append(
        "_subject",
        `[58 Systems] Process analysis request from ${formData.get("name") || "unknown"}`,
      );
    }

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
        signal: controller.signal,
      });
      if (res.ok) {
        setStatus("success");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch (_err) {
      setStatus("error");
    } finally {
      clearTimeout(timeoutId);
    }
  }

  const f = t.cta.form;

  return (
    <section
      id="analysis"
      data-testid="analysis-section"
      className="relative py-20 lg:py-32 bg-ink overflow-hidden"
    >
      <div
        className="absolute -bottom-40 -right-32 w-[560px] h-[560px] rounded-full opacity-25 blur-3xl"
        style={{ background: "radial-gradient(closest-side, rgba(242,160,58,0.45), transparent 70%)" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-grid-dark opacity-30 [mask-image:linear-gradient(to_bottom,transparent,black_30%,black_75%,transparent)]" />

      <div className="relative max-w-container mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: pitch + deliverables */}
          <div className="lg:col-span-6">
            <p className="eyebrow text-orange">{t.cta.eyebrow}</p>
            <h2 className="mt-4 font-display text-white text-4xl sm:text-5xl lg:text-[56px] leading-[1.04] tracking-[-0.025em]">
              {t.cta.headline}
            </h2>
            <p className="mt-6 text-white/72 text-[17px] leading-relaxed max-w-xl">{t.cta.lead}</p>

            <div className="mt-9">
              <p className="font-mono text-[11px] tracking-widest text-orange uppercase mb-4">
                {t.cta.deliverablesLabel}
              </p>
              <ul className="grid sm:grid-cols-2 gap-2.5">
                {t.cta.deliverables.map((d, i) => (
                  <li
                    key={d}
                    data-testid={`deliverable-${i + 1}`}
                    className="flex items-start gap-2.5 text-[14.5px] text-white/80"
                  >
                    <span className="w-5 h-5 mt-0.5 flex-shrink-0 inline-flex items-center justify-center rounded-full bg-orange/15 border border-orange/40 text-orange">
                      <CheckCircle2 size={12} strokeWidth={2.4} />
                    </span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-6">
            {/* Process chips — one-click starting point for the message field */}
            {t.cta.chips && (
              <div className="mb-5" data-testid="process-chips">
                <p className="font-mono text-[10.5px] tracking-widest text-orange uppercase mb-3">
                  {t.cta.chipsLabel}
                </p>
                <div className="flex flex-wrap gap-2">
                  {t.cta.chips.map((chip) => {
                    const selected = activeChip === chip.id;
                    return (
                      <button
                        key={chip.id}
                        type="button"
                        onClick={() => handleChip(chip)}
                        data-testid={`process-chip-${chip.id}`}
                        className={`text-[12.5px] px-3 py-1.5 rounded-full border transition-colors duration-150 ${
                          selected
                            ? "bg-orange text-ink border-orange"
                            : "bg-white/[0.03] text-white/75 border-white/[0.12] hover:border-orange/50 hover:text-white"
                        }`}
                      >
                        {chip.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            <div className="bg-white text-ink rounded-2xl border border-paper-line shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)] p-7 lg:p-9">
              {/* Sales-oriented title inside the form card */}
              <div className="mb-6">
                <h3
                  data-testid="form-title"
                  className="font-display text-ink text-[24px] lg:text-[26px] tracking-[-0.02em] leading-[1.15]"
                >
                  {f.title}
                </h3>
                <p className="mt-2 text-ink/70 text-[14.5px] leading-relaxed">
                  {f.subtitle}
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="space-y-4"
                data-testid="analysis-form"
                noValidate
              >
                {/* honeypot */}
                <input
                  type="text"
                  name="_gotcha"
                  tabIndex={-1}
                  autoComplete="off"
                  style={{ display: "none" }}
                />
                <input type="hidden" name="ui_lang" value={lang} />

                <Field label={f.email} htmlFor="cta-email">
                  <input
                    id="cta-email"
                    type="email"
                    name="email"
                    required
                    data-testid="form-email"
                    className="w-full px-3.5 py-3 bg-paper border border-paper-line rounded-md text-[15px] text-ink placeholder-ink/40 focus:border-orange focus:ring-2 focus:ring-orange/20 outline-none transition"
                  />
                </Field>

                <Field label={f.message} htmlFor="cta-message">
                  <textarea
                    id="cta-message"
                    ref={messageRef}
                    name="message"
                    rows={3}
                    data-testid="form-message"
                    onChange={(e) => {
                      // user is now editing; stop overwriting on chip click
                      if (e.target.dataset.fromChip === "true") {
                        e.target.dataset.fromChip = "false";
                      }
                    }}
                    className="w-full px-3.5 py-3 bg-paper border border-paper-line rounded-md text-[15px] text-ink placeholder-ink/40 focus:border-orange focus:ring-2 focus:ring-orange/20 outline-none transition resize-y"
                  />
                </Field>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  data-testid="form-submit"
                  className="btn-orange w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-md text-[14.5px] disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? f.submitting : f.submit}
                  {status !== "loading" && <ArrowRight size={16} />}
                </button>

                <p className="text-[12px] text-ink/55 leading-snug">{f.consent}</p>

                {status === "success" && (
                  <div
                    className="flex items-start gap-2.5 text-[13.5px] text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-md px-3.5 py-2.5"
                    data-testid="form-success"
                    role="status"
                  >
                    <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0" />
                    <span>{f.success}</span>
                  </div>
                )}
                {status === "error" && (
                  <div
                    className="flex items-start gap-2.5 text-[13.5px] text-red-700 bg-red-50 border border-red-200 rounded-md px-3.5 py-2.5"
                    data-testid="form-error"
                    role="alert"
                  >
                    <AlertCircle size={16} className="mt-0.5 flex-shrink-0" />
                    <span>{f.error}</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Field = ({ label, htmlFor, children }) => (
  <label htmlFor={htmlFor} className="block">
    <span className="block font-mono text-[11px] tracking-widest uppercase text-ink/75 mb-1.5">
      {label}
    </span>
    {children}
  </label>
);

export default ProcessAnalysisCTA;
