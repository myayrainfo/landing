import { Container } from "@mui/material";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import PaymentsRoundedIcon from "@mui/icons-material/PaymentsRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import InsightsRoundedIcon from "@mui/icons-material/InsightsRounded";
import TaskAltRoundedIcon from "@mui/icons-material/TaskAltRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";

const quickStats = [
  { label: "Students", value: "24,580", icon: GroupsRoundedIcon },
  { label: "Fees Collected", value: "92%", icon: PaymentsRoundedIcon },
  { label: "Attendance", value: "96.4%", icon: SchoolRoundedIcon },
];

const tasks = [
  "Admissions approval queue synced",
  "Semester fee reminders scheduled",
  "Faculty attendance report published",
];

const companyHighlights = [
  {
    title: "Built for Education",
    text: "Designed around institutional workflows, academic operations, and data visibility for modern campuses.",
  },
  {
    title: "Implementation Focused",
    text: "We help teams move from setup to daily usage with guided onboarding, training, and process support.",
  },
  {
    title: "Long-Term Partnership",
    text: "Our approach combines product delivery with responsive support so institutions can keep scaling confidently.",
  },
];

const platformSignals = [
  { label: "Live Modules", value: "12+" },
  { label: "Active Teams", value: "200+" },
  { label: "Process Sync", value: "Real-Time" },
];

export default function CompanySection() {
  return (
    <section className="section-shell py-24">
      <Container maxWidth="xl">
        <div className="luxury-panel grid overflow-hidden rounded-[34px] border border-white/10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="section-reveal relative min-h-[420px] overflow-hidden border-b border-white/10 bg-[#142033] p-6 lg:border-b-0 lg:border-r lg:p-8">
            <div className="ambient-orb left-6 top-6 h-28 w-28 bg-[#004A99]/35" />
            <div className="ambient-orb bottom-8 right-8 h-24 w-24 bg-[#0D9488]/20" />

            <div className="relative mx-auto mt-4 w-full max-w-[520px]">
              <div className="rounded-[26px] border border-white/10 bg-[#16263B] p-3 shadow-[0_28px_80px_rgba(0,0,0,0.35)]">
                <div className="rounded-[20px] border border-white/8 bg-[#0F172A]">
                  <div className="flex items-center justify-between border-b border-white/8 px-4 py-3">
                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#475569]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#0D9488]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#004A99]" />
                    </div>
                    <div className="rounded-full border border-white/8 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-white/55">
                      AYRA ERP
                    </div>
                  </div>

                  <div className="grid min-h-[300px] grid-cols-[92px_1fr]">
                    <div className="border-r border-white/8 bg-[#132238] p-3">
                      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-[#004A99]/18 text-[#0D9488]">
                        <SchoolRoundedIcon fontSize="small" />
                      </div>
                      <div className="space-y-2">
                        {["Dashboard", "Academics", "Finance", "Faculty", "Reports"].map((item, index) => (
                          <div
                            key={item}
                            className={`rounded-2xl px-3 py-2 text-xs ${
                              index === 0
                                ? "bg-[#004A99]/16 text-white"
                                : "text-white/55"
                            }`}
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-['Sora'] text-lg font-semibold text-white">University Command Center</p>
                          <p className="mt-1 text-xs text-white/55">Campus overview for AYRA partner institutions</p>
                        </div>
                        <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/8 bg-white/5 text-white/70">
                          <NotificationsRoundedIcon fontSize="small" />
                        </div>
                      </div>

                      <div className="mt-4 grid gap-3 sm:grid-cols-3">
                        {quickStats.map((stat) => {
                          const Icon = stat.icon;
                          return (
                            <div key={stat.label} className="rounded-[20px] border border-white/8 bg-white/[0.04] p-3">
                              <div className="flex items-center justify-between">
                                <p className="text-[11px] uppercase tracking-[0.18em] text-white/45">{stat.label}</p>
                                <Icon sx={{ fontSize: 16, color: "#0D9488" }} />
                              </div>
                              <p className="mt-3 font-['Sora'] text-xl font-semibold text-white">{stat.value}</p>
                            </div>
                          );
                        })}
                      </div>

                      <div className="mt-4 grid gap-3 lg:grid-cols-[1.2fr_0.8fr]">
                        <div className="rounded-[22px] border border-white/8 bg-white/[0.04] p-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-['Sora'] text-sm font-semibold text-white">Performance Trend</p>
                              <p className="text-xs text-white/45">Academic and operational efficiency</p>
                            </div>
                            <InsightsRoundedIcon sx={{ fontSize: 18, color: "#0D9488" }} />
                          </div>
                          <div className="mt-4 flex h-28 items-end gap-2">
                            {[42, 56, 48, 70, 78, 68, 92].map((height, index) => (
                              <div key={height + index} className="flex flex-1 flex-col items-center gap-2">
                                <div
                                  className={`w-full rounded-t-xl ${
                                    index === 6 ? "bg-[#0D9488]" : "bg-[#004A99]"
                                  }`}
                                  style={{ height: `${height}%` }}
                                />
                                <span className="text-[10px] text-white/35">{["M", "T", "W", "T", "F", "S", "S"][index]}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="rounded-[22px] border border-white/8 bg-white/[0.04] p-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-['Sora'] text-sm font-semibold text-white">Calendar</p>
                              <p className="text-xs text-white/45">This week</p>
                            </div>
                            <CalendarMonthRoundedIcon sx={{ fontSize: 18, color: "#0D9488" }} />
                          </div>
                          <div className="mt-4 space-y-2">
                            {["Admissions Review", "Faculty Payroll", "Exam Schedule"].map((item, index) => (
                              <div key={item} className="rounded-2xl bg-[#18263A] px-3 py-2 text-xs text-white/72">
                                <span className="mr-2 text-[#0D9488]">0{index + 2}</span>
                                {item}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 rounded-[22px] border border-white/8 bg-white/[0.04] p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-['Sora'] text-sm font-semibold text-white">Workflow Automation</p>
                            <p className="text-xs text-white/45">Recent activity</p>
                          </div>
                          <TaskAltRoundedIcon sx={{ fontSize: 18, color: "#0D9488" }} />
                        </div>
                        <div className="mt-4 space-y-3">
                          {tasks.map((task) => (
                            <div key={task} className="flex items-center gap-3 rounded-2xl bg-[#18263A] px-3 py-2.5">
                              <span className="h-2.5 w-2.5 rounded-full bg-[#004A99]" />
                              <span className="text-xs text-white/72">{task}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mx-auto h-4 w-[78%] rounded-b-[999px] bg-[#c9cedd]/18 blur-[1px]" />
              <div className="mx-auto h-3 w-[42%] rounded-b-[999px] bg-[#dfe5f7]/18" />
            </div>

            <div className="relative mx-auto mt-8 grid w-full max-w-[520px] gap-4 sm:grid-cols-3">
              {platformSignals.map((signal, index) => (
                <div
                  key={signal.label}
                  className={`section-reveal section-reveal-delay-${Math.min(index + 1, 3)} rounded-[22px] border border-white/10 bg-white/[0.04] p-4 text-center`}
                >
                  <p className="font-['Sora'] text-2xl font-semibold text-white">{signal.value}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.18em] text-white/55">{signal.label}</p>
                </div>
              ))}
            </div>

            <div className="relative mx-auto mt-4 w-full max-w-[520px] rounded-[24px] border border-white/10 bg-[#162235]/70 p-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-[#0D9488]">Operational Flow</p>
                  <p className="mt-2 text-white/72">
                    Admissions, academics, finance, and reporting moving through one connected system.
                  </p>
                </div>
                <div className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/70">
                  Unified ERP
                </div>
              </div>
            </div>
          </div>

          <div className="section-reveal section-reveal-delay-1 p-10 lg:p-14">
            <p className="text-sm uppercase tracking-[0.3em] text-[#0D9488]">Company</p>
            <h2 className="mt-4 font-['Sora'] text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">
              AYRA ERP Pvt. Ltd.
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/72">
              AYRA ERP exists to bring intelligent automation, visibility, and operational elegance to
              education. We believe universities deserve software that feels as advanced as the outcomes
              they are shaping.
            </p>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <div className="rounded-[28px] border border-white/10 bg-white/4 p-5">
                <p className="font-['Sora'] text-lg font-semibold text-white">Mission</p>
                <p className="mt-2 text-white/68">
                  To revolutionize how educational institutions operate through intelligent automation.
                </p>
              </div>
              <div className="rounded-[28px] border border-white/10 bg-white/4 p-5">
                <p className="font-['Sora'] text-lg font-semibold text-white">Vision</p>
                <p className="mt-2 text-white/68">
                  A world where every university runs on a single, unified digital platform.
                </p>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/72">
              {["Founded: 2022", "HQ: India", "Team: 200+"].map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-10 grid gap-5">
              {companyHighlights.map((item, index) => (
                <div
                  key={item.title}
                  className={`section-reveal section-reveal-delay-${Math.min(index + 1, 3)} rounded-[28px] border border-white/10 bg-white/[0.04] p-6`}
                >
                  <p className="text-sm uppercase tracking-[0.2em] text-[#0D9488]">{item.title}</p>
                  <p className="mt-3 max-w-2xl leading-7 text-white/72">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              <div className="rounded-[28px] border border-white/10 bg-[#132238]/75 p-6">
                <p className="text-sm uppercase tracking-[0.2em] text-[#0D9488]">What We Deliver</p>
                <h3 className="mt-3 font-['Sora'] text-2xl font-semibold text-white">Unified Campus Operations</h3>
                <p className="mt-4 leading-7 text-white/72">
                  Admissions, finance, academics, faculty management, and reporting connected in one streamlined
                  platform.
                </p>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6">
                <p className="text-sm uppercase tracking-[0.2em] text-[#0D9488]">Why It Matters</p>
                <h3 className="mt-3 font-['Sora'] text-2xl font-semibold text-white">Better Decisions, Faster Teams</h3>
                <p className="mt-4 leading-7 text-white/72">
                  Institutions gain clarity, reduce repetitive work, and create a smoother digital experience for
                  staff and students.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
