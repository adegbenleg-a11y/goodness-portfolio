import React, { useState } from 'react';
import {
  Sparkle,
  Cpu,
  TerminalWindow,
  ArrowUpRight,
  CheckCircle,
  CaretRight,
  ChartLineUp,
  Student,
  Play,
} from '@phosphor-icons/react';

interface HeroDemoPlaygroundProps {
  onClose?: () => void;
  initialTab?: 'bitfinder' | 'churn' | 'terminal' | 'boxes';
}

export const HeroDemoPlayground: React.FC<HeroDemoPlaygroundProps> = ({
  initialTab = 'bitfinder',
}) => {
  const [activeTab, setActiveTab] = useState<'bitfinder' | 'churn' | 'terminal' | 'boxes'>(initialTab);

  // -------------------------------------------------------------
  // BitFinder Demo State
  // -------------------------------------------------------------
  const [selectedInterests, setSelectedInterests] = useState<string[]>([
    'AI & Machine Learning',
    'Software & Algorithms',
  ]);
  const [practicalPreference, setPracticalPreference] = useState<number>(75);
  const [isInferencingBitfinder, setIsInferencingBitfinder] = useState<boolean>(false);
  const [bitfinderResult, setBitfinderResult] = useState<{
    course: string;
    confidence: number;
    matchReasons: string[];
    recommendedStack: string[];
    careerOutcomes: string[];
  } | null>({
    course: 'Certificate in AI/ML Engineering',
    confidence: 96.4,
    matchReasons: [
      'Strong alignment with analytical thinking & algorithmic logic',
      'High preference for hands-on predictive modeling and system design',
      'Balanced interest in high-impact machine learning architectures',
    ],
    recommendedStack: ['Python', 'PyTorch', 'Scikit-Learn', 'FastAPI', 'Pandas'],
    careerOutcomes: ['AI/ML Engineer', 'Model Developer', 'Machine Learning Researcher'],
  });

  const availableInterests = [
    'AI & Machine Learning',
    'Software & Algorithms',
    'Mathematics & Statistics',
    'Robotics & Hardware',
    'Creative Writing & Media',
    'Business & Product Strategy',
    'Cybersecurity & Networks',
    'Healthcare & Bio-Tech',
  ];

  const toggleInterest = (interest: string) => {
    if (selectedInterests.includes(interest)) {
      if (selectedInterests.length > 1) {
        setSelectedInterests(selectedInterests.filter((item) => item !== interest));
      }
    } else {
      if (selectedInterests.length < 4) {
        setSelectedInterests([...selectedInterests, interest]);
      }
    }
  };

  const handleRunBitfinder = () => {
    setIsInferencingBitfinder(true);
    setTimeout(() => {
      // Dynamic recommendation based on selection
      let course = 'Certificate in AI/ML Engineering';
      let confidence = 94.8;
      let reasons = [
        'High alignment with algorithmic modeling and predictive analysis',
        'Balanced preference for real-world application & data engineering',
      ];
      let stack = ['Python', 'PyTorch', 'Scikit-Learn', 'FastAPI'];
      let careers = ['AI Engineer', 'ML Specialist'];

      if (selectedInterests.includes('Robotics & Hardware')) {
        course = 'Certificate in Autonomous Systems & Robotics AI';
        confidence = 97.1;
        reasons = ['Deep interest in hardware-software interfaces and sensor integration', 'Strong algorithmic orientation'];
        stack = ['C++', 'Python', 'ROS', 'PyTorch'];
        careers = ['Robotics AI Engineer', 'Embedded ML Developer'];
      } else if (selectedInterests.includes('Business & Product Strategy')) {
        course = 'Certificate in Applied Data Intelligence & Product Analytics';
        confidence = 95.3;
        reasons = ['Focus on translating machine learning insights into commercial strategy', 'Data-driven decision making'];
        stack = ['Python', 'SQL', 'Scikit-Learn', 'Tableau'];
        careers = ['Data Scientist', 'AI Product Manager'];
      } else if (selectedInterests.includes('Healthcare & Bio-Tech')) {
        course = 'Certificate in Computational Biology & Healthcare Informatics';
        confidence = 98.2;
        reasons = ['Interest in applying neural architectures to health diagnostics and life sciences', 'Predictive modeling aptitude'];
        stack = ['Python', 'Biopython', 'TensorFlow', 'Pandas'];
        careers = ['Health AI Engineer', 'Bioinformatics Scientist'];
      }

      setBitfinderResult({
        course,
        confidence,
        matchReasons: reasons,
        recommendedStack: stack,
        careerOutcomes: careers,
      });
      setIsInferencingBitfinder(false);
    }, 700);
  };

  // -------------------------------------------------------------
  // Churn Detection Demo State
  // -------------------------------------------------------------
  const [tenureMonths, setTenureMonths] = useState<number>(14);
  const [monthlySpend, setMonthlySpend] = useState<number>(85);
  const [supportTickets, setSupportTickets] = useState<number>(1);
  const [contractType, setContractType] = useState<'monthly' | 'one-year' | 'two-year'>('one-year');
  const [isInferencingChurn, setIsInferencingChurn] = useState<boolean>(false);
  const [churnResult, setChurnResult] = useState<{
    riskPercent: number;
    riskCategory: 'Low' | 'Moderate' | 'High';
    topFactor: string;
    recommendation: string;
  } | null>({
    riskPercent: 18.5,
    riskCategory: 'Low',
    topFactor: 'Contract stability (1-Year) & low ticket volume counteract moderate spend.',
    recommendation: 'Account is healthy. Eligible for proactive feature upgrades.',
  });

  const handleRunChurn = () => {
    setIsInferencingChurn(true);
    setTimeout(() => {
      // Calculate realistic simulated risk
      let baseRisk = 20;
      if (contractType === 'monthly') baseRisk += 35;
      if (contractType === 'two-year') baseRisk -= 15;

      baseRisk += supportTickets * 12;

      if (tenureMonths < 6) baseRisk += 15;
      if (tenureMonths > 24) baseRisk -= 18;

      if (monthlySpend > 120) baseRisk += 10;

      const riskPercent = Math.max(5, Math.min(94, baseRisk));
      const riskCategory: 'Low' | 'Moderate' | 'High' =
        riskPercent < 35 ? 'Low' : riskPercent < 70 ? 'Moderate' : 'High';

      let topFactor = '';
      let recommendation = '';

      if (riskCategory === 'High') {
        topFactor = supportTickets >= 3
          ? `High support friction (${supportTickets} tickets in 30 days) and month-to-month commitment.`
          : 'Low tenure combined with elevated churn indicators.';
        recommendation = 'Critical: Route to Senior Customer Success Manager with targeted renewal incentive.';
      } else if (riskCategory === 'Moderate') {
        topFactor = 'Moderate risk driven by recent usage variance and contract structure.';
        recommendation = 'Monitor activity cadence; trigger automated check-in and feature walkthrough.';
      } else {
        topFactor = 'Strong customer health profile with high tenure retention metrics.';
        recommendation = 'High account stability. Prime candidate for expansion or case study.';
      }

      setChurnResult({
        riskPercent,
        riskCategory,
        topFactor,
        recommendation,
      });
      setIsInferencingChurn(false);
    }, 600);
  };

  // -------------------------------------------------------------
  // Terminal Demo State
  // -------------------------------------------------------------
  const [terminalHistory, setTerminalHistory] = useState<Array<{ cmd: string; output: string | React.ReactNode }>>([
    {
      cmd: 'python --version',
      output: 'Python 3.11.8 (Conda ML Environment: goodness-ml-core)',
    },
    {
      cmd: 'cat model_manifest.json',
      output: JSON.stringify(
        {
          author: 'Adegbenle Goodness Boluwatife',
          models: [
            { name: 'BitFinder-Recommender-v2', accuracy: '95.2%', framework: 'PyTorch/Scikit-learn' },
            { name: 'Customer-Churn-XGBoost', auc_roc: 0.948, latency_ms: 22 },
          ],
          runtime: 'FastAPI / Python Microservice',
          status: 'Online & Serving Predictions',
        },
        null,
        2
      ),
    },
  ]);
  const [terminalInput, setTerminalInput] = useState<string>('');

  const executeCommand = (cmdText: string) => {
    const trimmed = cmdText.trim();
    if (!trimmed) return;

    let output: string | React.ReactNode = '';
    const lower = trimmed.toLowerCase();

    if (lower === 'clear') {
      setTerminalHistory([]);
      setTerminalInput('');
      return;
    } else if (lower.includes('bitfinder') || lower === 'run bitfinder') {
      output = `[BitFinder v2.1] Loading vector weights...
✓ Vectorizer: TF-IDF + Subject Embedding Matrix loaded (24,192 parameters)
✓ Inference request processed in 18ms
➜ Top Predicted Course: Certificate in AI/ML Engineering (Confidence: 96.4%)
➜ Status: 200 OK (Payload served via REST API)`;
    } else if (lower.includes('churn') || lower === 'run churn') {
      output = `[Churn-Detector-v1] Loading trained Random Forest / XGBoost ensemble...
✓ Loaded weights from /models/churn_detection_model.pkl
✓ Confusion Matrix:
    Actual Positive: TP=412, FN=28 (Recall: 93.6%)
    Actual Negative: TN=1840, FP=44 (Precision: 90.3%)
➜ Model AUC-ROC: 0.9482
➜ Latency: 22.4ms`;
    } else if (lower === 'whoami' || lower === 'about') {
      output = `Adegbenle Goodness Boluwatife
AI/ML Engineer & Model Developer based in Nigeria.
"I turn ideas into practical solutions, from trained models to the websites that put them to use."
Skills: Python, Scikit-learn, PyTorch, React, REST API, Predictive Modeling.`;
    } else if (lower === 'status' || lower === 'health') {
      output = `● Model Server: ACTIVE (PID: 8042)
● Memory Usage: 342MB / 2048MB
● Average Response Time: 24.1ms
● Endpoints: /api/v1/predict/bitfinder, /api/v1/predict/churn`;
    } else if (lower === 'help') {
      output = `Available demo commands:
  • run bitfinder   - Run course recommendation model inference
  • run churn       - Evaluate churn model metrics & ROC curve
  • status          - Check live API service status
  • whoami          - View engineer background
  • clear           - Clear terminal screen`;
    } else {
      output = `Command not recognized: '${trimmed}'. Type 'help' for available commands.`;
    }

    setTerminalHistory((prev) => [...prev, { cmd: trimmed, output }]);
    setTerminalInput('');
  };

  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    executeCommand(terminalInput);
  };

  return (
    <div className="w-full bg-black/90 backdrop-blur-xl border border-red-500/30 rounded-2xl p-4 sm:p-6 md:p-8 text-white shadow-2xl shadow-red-950/40 relative overflow-hidden">
      {/* Subtle red ambient glow in the playground header */}
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-red-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-red-800/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header bar with tabs */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-5 relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-xs font-medium text-red-400 mb-2">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span>Interactive Demo Playground</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-serif font-bold tracking-tight text-white flex items-center gap-2">
            <span>Test Goodness's Live Models</span>
            <Sparkle size={18} weight="fill" className="text-red-400" />
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 mt-0.5">
            Real algorithmic logic simulating trained model inference in real-time.
          </p>
        </div>

        {/* Demo switcher tabs */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-neutral-900/90 border border-neutral-800">
          <button
            type="button"
            onClick={() => setActiveTab('bitfinder')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
              activeTab === 'bitfinder'
                ? 'bg-red-600 text-white shadow-md shadow-red-600/30'
                : 'text-neutral-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Student size={15} weight="bold" />
            <span>BitFinder</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('churn')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
              activeTab === 'churn'
                ? 'bg-red-600 text-white shadow-md shadow-red-600/30'
                : 'text-neutral-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <ChartLineUp size={15} weight="bold" />
            <span>Churn Model</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('terminal')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
              activeTab === 'terminal'
                ? 'bg-red-600 text-white shadow-md shadow-red-600/30'
                : 'text-neutral-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <TerminalWindow size={15} weight="bold" />
            <span>API Console</span>
          </button>
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* TAB 1: BITFINDER COURSE PREDICTOR DEMO */}
      {/* ------------------------------------------------------------- */}
      {activeTab === 'bitfinder' && (
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10">
          {/* Left Configuration Inputs */}
          <div className="lg:col-span-6 space-y-5 bg-neutral-900/60 border border-neutral-800 rounded-xl p-5">
            <div>
              <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">
                <span>1. Select Interests (Pick 1 to 4)</span>
                <span className="text-red-400">{selectedInterests.length}/4 selected</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {availableInterests.map((interest) => {
                  const isSelected = selectedInterests.includes(interest);
                  return (
                    <button
                      key={interest}
                      type="button"
                      onClick={() => toggleInterest(interest)}
                      className={`text-xs px-3 py-1.5 rounded-full border transition-all ${
                        isSelected
                          ? 'bg-red-600/20 border-red-500 text-white font-medium'
                          : 'bg-neutral-800/60 border-neutral-700/60 text-neutral-400 hover:text-neutral-200 hover:border-neutral-600'
                      }`}
                    >
                      {interest}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Slider */}
            <div>
              <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">
                <span>2. Learning Orientation</span>
                <span className="text-neutral-300 font-mono">
                  {practicalPreference < 40 ? 'Theoretical' : practicalPreference > 65 ? 'Applied / Hands-On' : 'Balanced'}
                </span>
              </div>
              <input
                type="range"
                min="10"
                max="90"
                value={practicalPreference}
                onChange={(e) => setPracticalPreference(Number(e.target.value))}
                className="w-full accent-red-500 h-1.5 bg-neutral-800 rounded-lg cursor-pointer"
                aria-label="Learning Orientation Preference"
              />
              <div className="flex justify-between text-[11px] text-neutral-500 mt-1">
                <span>Research &amp; Theory</span>
                <span>System Design &amp; Building</span>
              </div>
            </div>

            {/* Action */}
            <div className="pt-2">
              <button
                type="button"
                onClick={handleRunBitfinder}
                disabled={isInferencingBitfinder}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-medium text-sm transition-all shadow-lg shadow-red-700/30 disabled:opacity-50"
              >
                {isInferencingBitfinder ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Computing Neural Softmax...</span>
                  </>
                ) : (
                  <>
                    <Play size={16} weight="fill" />
                    <span>Run BitFinder Model Inference</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Inference Results Display */}
          <div className="lg:col-span-6 bg-neutral-900/90 border border-neutral-800 rounded-xl p-5 flex flex-col justify-between">
            {bitfinderResult && (
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
                  <div className="flex items-center gap-2 text-xs text-neutral-400">
                    <Cpu size={16} className="text-red-400" />
                    <span>Model Output &bull; BitFinder Recommendation API</span>
                  </div>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    {bitfinderResult.confidence}% Confidence
                  </span>
                </div>

                <div>
                  <span className="text-xs uppercase tracking-wider text-neutral-400 font-semibold block mb-1">
                    Recommended Certification Track
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white font-serif tracking-tight text-red-100">
                    {bitfinderResult.course}
                  </h3>
                </div>

                <div>
                  <span className="text-xs uppercase tracking-wider text-neutral-400 font-semibold block mb-1.5">
                    Algorithmic Decision Drivers
                  </span>
                  <ul className="space-y-1.5 text-xs text-neutral-300">
                    {bitfinderResult.matchReasons.map((reason, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle size={14} weight="fill" className="text-red-400 mt-0.5 shrink-0" />
                        <span>{reason}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2">
                  <span className="text-xs uppercase tracking-wider text-neutral-400 font-semibold block mb-1.5">
                    Target Tech Stack &amp; Roles
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {bitfinderResult.recommendedStack.map((tech) => (
                      <span key={tech} className="text-[11px] px-2 py-0.5 rounded bg-neutral-800 text-neutral-300 border border-neutral-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            <div className="mt-4 pt-3 border-t border-neutral-800/80 flex items-center justify-between text-xs text-neutral-400">
              <span className="font-mono text-[11px]">Model: Random Forest + Survey API</span>
              <a
                href="https://github.com/adegbenleg-a11y/bitfinder-model-api"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-red-400 hover:text-red-300 font-medium transition-colors"
              >
                <span>View GitHub Repo</span>
                <ArrowUpRight size={13} weight="bold" />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* TAB 2: CUSTOMER CHURN DETECTION DEMO */}
      {/* ------------------------------------------------------------- */}
      {activeTab === 'churn' && (
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10">
          {/* Controls */}
          <div className="lg:col-span-6 space-y-4 bg-neutral-900/60 border border-neutral-800 rounded-xl p-5">
            {/* Contract Type */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1.5">
                Contract Type
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(['monthly', 'one-year', 'two-year'] as const).map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setContractType(type)}
                    className={`py-2 px-2 rounded-lg text-xs font-medium border text-center transition-all ${
                      contractType === type
                        ? 'bg-red-600/25 border-red-500 text-white font-semibold'
                        : 'bg-neutral-800/60 border-neutral-700/60 text-neutral-400 hover:text-white'
                    }`}
                  >
                    {type === 'monthly' ? 'Month-to-Month' : type === 'one-year' ? '1-Year Fixed' : '2-Year Fixed'}
                  </button>
                ))}
              </div>
            </div>

            {/* Tenure Slider */}
            <div>
              <div className="flex justify-between text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1">
                <span>Account Tenure</span>
                <span className="text-white font-mono">{tenureMonths} Months</span>
              </div>
              <input
                type="range"
                min="1"
                max="36"
                value={tenureMonths}
                onChange={(e) => setTenureMonths(Number(e.target.value))}
                className="w-full accent-red-500 h-1.5 bg-neutral-800 rounded-lg cursor-pointer"
                aria-label="Customer Account Tenure"
              />
            </div>

            {/* Monthly Spend */}
            <div>
              <div className="flex justify-between text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1">
                <span>Monthly Bill ($USD)</span>
                <span className="text-white font-mono">${monthlySpend}/mo</span>
              </div>
              <input
                type="range"
                min="20"
                max="200"
                step="5"
                value={monthlySpend}
                onChange={(e) => setMonthlySpend(Number(e.target.value))}
                className="w-full accent-red-500 h-1.5 bg-neutral-800 rounded-lg cursor-pointer"
                aria-label="Monthly Bill Amount"
              />
            </div>

            {/* Support Tickets */}
            <div>
              <div className="flex justify-between text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1">
                <span>Support Tickets Filed (30 Days)</span>
                <span className="text-white font-mono">{supportTickets} Tickets</span>
              </div>
              <div className="flex gap-2">
                {[0, 1, 2, 4, 6].map((count) => (
                  <button
                    key={count}
                    type="button"
                    onClick={() => setSupportTickets(count)}
                    className={`flex-1 py-1.5 rounded-lg text-xs font-mono border transition-all ${
                      supportTickets === count
                        ? 'bg-red-600 text-white font-bold border-red-500'
                        : 'bg-neutral-800/70 border-neutral-700/60 text-neutral-400 hover:text-white'
                    }`}
                  >
                    {count === 6 ? '6+' : count}
                  </button>
                ))}
              </div>
            </div>

            {/* Button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={handleRunChurn}
                disabled={isInferencingChurn}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-medium text-sm transition-all shadow-lg shadow-red-700/30 disabled:opacity-50"
              >
                {isInferencingChurn ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Evaluating Classifier Ensemble...</span>
                  </>
                ) : (
                  <>
                    <Play size={16} weight="fill" />
                    <span>Analyze Churn Probability</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Results Display */}
          <div className="lg:col-span-6 bg-neutral-900/90 border border-neutral-800 rounded-xl p-5 flex flex-col justify-between">
            {churnResult && (
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
                  <div className="flex items-center gap-2 text-xs text-neutral-400">
                    <ChartLineUp size={16} className="text-red-400" />
                    <span>Predictive Risk Assessment Engine</span>
                  </div>
                  <span
                    className={`text-xs font-mono px-2.5 py-0.5 rounded font-bold uppercase border ${
                      churnResult.riskCategory === 'Low'
                        ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
                        : churnResult.riskCategory === 'Moderate'
                        ? 'bg-amber-500/20 text-amber-400 border-amber-500/30'
                        : 'bg-red-500/20 text-red-400 border-red-500/30'
                    }`}
                  >
                    {churnResult.riskCategory} Risk
                  </span>
                </div>

                {/* Probability Meter */}
                <div>
                  <div className="flex items-baseline justify-between mb-1.5">
                    <span className="text-xs uppercase tracking-wider text-neutral-400 font-semibold">
                      Calculated Churn Probability
                    </span>
                    <span className="text-2xl font-bold font-mono text-white">
                      {churnResult.riskPercent}%
                    </span>
                  </div>
                  <div className="w-full h-3 bg-neutral-800 rounded-full overflow-hidden p-0.5 border border-neutral-700/60">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        churnResult.riskPercent < 35
                          ? 'bg-gradient-to-r from-emerald-500 to-emerald-400'
                          : churnResult.riskPercent < 70
                          ? 'bg-gradient-to-r from-amber-500 to-amber-400'
                          : 'bg-gradient-to-r from-red-600 to-red-500'
                      }`}
                      style={{ width: `${churnResult.riskPercent}%` }}
                    />
                  </div>
                </div>

                {/* Driving Factor */}
                <div>
                  <span className="text-xs uppercase tracking-wider text-neutral-400 font-semibold block mb-1">
                    Key Predictive Indicator (SHAP Feature Weight)
                  </span>
                  <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed bg-neutral-800/40 p-3 rounded-lg border border-neutral-800">
                    {churnResult.topFactor}
                  </p>
                </div>

                {/* Recommended Intervention */}
                <div>
                  <span className="text-xs uppercase tracking-wider text-neutral-400 font-semibold block mb-1">
                    Recommended Retention Protocol
                  </span>
                  <p className="text-xs text-neutral-300 bg-neutral-800/40 p-3 rounded-lg border border-neutral-800">
                    {churnResult.recommendation}
                  </p>
                </div>
              </div>
            )}

            <div className="mt-4 pt-3 border-t border-neutral-800/80 flex items-center justify-between text-xs text-neutral-400">
              <span className="font-mono text-[11px]">Scikit-Learn &bull; ROC-AUC: 0.948</span>
              <a
                href="https://github.com/adegbenleg-a11y/Churn-Detection-model"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-red-400 hover:text-red-300 font-medium transition-colors"
              >
                <span>View GitHub Repo</span>
                <ArrowUpRight size={13} weight="bold" />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* TAB 3: DEVELOPER TERMINAL CONSOLE */}
      {/* ------------------------------------------------------------- */}
      {activeTab === 'terminal' && (
        <div className="mt-6 bg-[#0a0a0c] border border-neutral-800 rounded-xl overflow-hidden font-mono text-xs text-neutral-300 relative z-10">
          {/* Terminal Window Header */}
          <div className="bg-neutral-900/90 px-4 py-2.5 border-b border-neutral-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="ml-2 text-neutral-400 text-[11px]">goodness@adegbenle-ai:~/projects</span>
            </div>
            <div className="flex items-center gap-2 text-[11px] text-neutral-500">
              <span>bash &bull; 80x24</span>
            </div>
          </div>

          {/* Quick presets */}
          <div className="bg-neutral-950/80 px-4 py-2 border-b border-neutral-800/60 flex items-center gap-2 flex-wrap">
            <span className="text-[11px] text-neutral-500">Quick run:</span>
            {[
              'run bitfinder',
              'run churn',
              'status',
              'whoami',
              'help',
            ].map((cmd) => (
              <button
                key={cmd}
                type="button"
                onClick={() => executeCommand(cmd)}
                className="px-2 py-0.5 rounded bg-neutral-800/80 hover:bg-neutral-700 text-neutral-300 text-[11px] border border-neutral-700 transition-colors"
              >
                {cmd}
              </button>
            ))}
          </div>

          {/* Terminal Body */}
          <div className="p-4 space-y-3 min-h-[240px] max-h-[340px] overflow-y-auto">
            {terminalHistory.map((entry, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex items-center gap-2 text-red-400 font-semibold">
                  <CaretRight size={13} weight="bold" />
                  <span>{entry.cmd}</span>
                </div>
                <pre className="text-neutral-300 whitespace-pre-wrap pl-4 leading-relaxed font-mono text-[11px]">
                  {entry.output}
                </pre>
              </div>
            ))}

            {/* Input Form */}
            <form onSubmit={handleTerminalSubmit} className="flex items-center gap-2 pt-2">
              <span className="text-red-400 font-bold">$</span>
              <input
                type="text"
                value={terminalInput}
                onChange={(e) => setTerminalInput(e.target.value)}
                placeholder="Type a command (e.g. 'help', 'run bitfinder', 'status')..."
                className="flex-1 bg-transparent text-white focus:outline-none font-mono text-xs placeholder:text-neutral-600"
                autoComplete="off"
                spellCheck="false"
              />
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
