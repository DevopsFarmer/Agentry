import React from "react";

const CaseStudies = () => (
  <section className="py-16 bg-white text-gray-800">
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-4xl font-bold mb-4">Reducing Loan Defaults for Rural Fintech Lender by 28%</h2>
      <p className="text-lg mb-10">How our predictive AI model empowered a fintech to confidently underwrite MSME loans with alt-data and real-time automation.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-2">👉 The Challenge</h3>
          <p className="mb-4">A rural NBFC faced high default rates due to poor borrower visibility. Thin-file MSMEs and first-time borrowers weren’t scoreable through traditional bureaus, leading to manual delays and high risk.</p>
          <ul className="list-disc ml-6 text-sm text-gray-700">
            <li>High NPA ratios in rural regions</li>
            <li>Underwriting delays exceeding 48 hours</li>
            <li>No reliable credit score for new borrowers</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">🔧 Our Solution</h3>
          <p className="mb-4">We built an automated risk-scoring pipeline using alt-data, explainable AI models, and fast API integration for loan decisions.</p>
          <ul className="list-disc ml-6 text-sm text-gray-700">
            <li>MAID data for behavioral profiling</li>
            <li>Account Aggregator APIs for cash flow visibility</li>
            <li>GST parsing for MSME business performance</li>
            <li>Langflow + n8n for low-code automation</li>
          </ul>
        </div>
      </div>
      <div className="my-12">
        <h3 className="text-xl font-semibold mb-2">⚙️ Implementation Highlights</h3>
        <ul className="list-disc ml-6 text-sm text-gray-700">
          <li>Built and deployed MVP in 14 days</li>
          <li>Model trained on hybrid alt + structured data</li>
          <li>Slack & WhatsApp alerts integrated with LOS</li>
          <li>FastAPI + Gradio used for real-time scoring dashboard</li>
        </ul>
      </div>
      <div className="my-12">
        <h3 className="text-xl font-semibold mb-2">📈 Results & Business Impact</h3>
        <ul className="list-disc ml-6 text-sm text-gray-700">
          <li><strong>28% reduction</strong> in defaults in pilot geography</li>
          <li><strong>41% more approvals</strong> for NTC customers</li>
          <li>Underwriting cycle dropped to under 2 hours</li>
          <li>Zero disruption to existing loan origination system</li>
        </ul>
      </div>
      <blockquote className="border-l-4 border-indigo-600 pl-4 italic text-gray-600 mb-10">
        “We were amazed by how fast they understood our market and data challenges. The AI score helped us trust new customers we’d normally reject—and it worked.”<br />
        <span className="block text-right text-sm mt-2">&mdash; VP, Credit Risk, Client NBFC</span>
      </blockquote>
      <div className="flex flex-col sm:flex-row gap-4">
        <a href="#" className="bg-indigo-600 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-indigo-700">Download Technical Workflow</a>
        <a href="#" className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-full text-sm font-medium hover:bg-indigo-50">Book a Free Strategy Call</a>
      </div>
    </div>
  </section>
);

export default CaseStudies;
