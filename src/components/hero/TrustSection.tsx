import { motion } from 'framer-motion'

const specs = [
  { domain: 'Edge Compute', language: 'Rust / Go', framework: 'Wasm / Cloudflare', metric: '< 20ms Latency' },
  { domain: 'Neural Engine', language: 'Python', framework: 'PyTorch / RAG', metric: '99.2% Accuracy' },
  { domain: 'Data Mesh', language: 'TypeScript', framework: 'Next.js / GraphQL', metric: '1M+ Ops/sec' },
  { domain: 'Identity Sys', language: 'Go', framework: 'OAuth 2.1 / Auth0', metric: 'Zero-Trust SSL' },
  { domain: 'Scale Ops', language: 'HCL / YAML', framework: 'K8s / Terraform', metric: '99.99% Uptime' },
]

export function TrustSection() {
  return (
    <div className="py-24 border-y border-white/5 bg-white/[0.01]">
      <div className="container-custom">
        <div className="mb-12">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/30">
            System Capability Ledger / v4.2.0
          </span>
        </div>
        
        <div className="flex flex-col">
          {/* Header Row */}
          <div className="spec-row border-b-2 border-white/20 pb-4 text-[10px] font-mono uppercase text-white/30">
            <div className="w-1/4">Domain Cluster</div>
            <div className="w-1/4">Core Engine</div>
            <div className="w-1/4">Implementation</div>
            <div className="w-1/4 text-right">Target Metric</div>
          </div>

          {specs.map((spec, index) => (
            <motion.div
              key={spec.domain}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="spec-row"
            >
              <div className="w-1/4 font-heading font-medium text-white text-lg lg:text-xl">
                {spec.domain}
              </div>
              <div className="w-1/4 font-mono text-xs text-muted">
                {spec.language}
              </div>
              <div className="w-1/4 font-mono text-xs text-muted">
                {spec.framework}
              </div>
              <div className="w-1/4 text-right font-mono text-xs text-primary font-bold">
                {spec.metric}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
