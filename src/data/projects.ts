export const projects = [
  {
    id: 'neural-sync-v4',
    title: 'NeuralSync v4',
    category: 'AI Infrastructure',
    description: 'High-throughput RAG pipeline for institutional knowledge graphs.',
    metrics: { latency: '12ms', throughput: '1.2M req/m', accuracy: '99.4%' },
    technologies: ['PyTorch', 'Rust', 'VectorDB', 'CUDA'],
    image: 'https://images.unsplash.com/photo-1617040619263-41c5a9ca7521?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85',
    fullDescription: `NeuralSync v4 represents our most advanced AI infrastructure project. This high-throughput RAG (Retrieval-Augmented Generation) pipeline was designed specifically for institutional knowledge graphs requiring real-time processing at scale.

## Key Features

- **Sub-12ms Latency**: Optimized inference pipeline with edge deployment
- **1.2M Requests/Minute**: Horizontal scaling with automatic load balancing
- **99.4% Accuracy**: Fine-tuned models for domain-specific knowledge
- **Multi-Modal Support**: Text, images, and structured data processing

## Technical Architecture

The system uses a distributed architecture with PyTorch for model inference, Rust for high-performance data processing, VectorDB for semantic search, and CUDA acceleration for GPU-optimized computations.

## Impact

Deployed across 3 continents, NeuralSync v4 processes over 1.5 billion queries monthly, serving financial institutions, healthcare providers, and research organizations.`,
  },
  {
    id: 'edge-ledger-fin',
    title: 'Edge Ledger',
    category: 'Fintech / Edge',
    description: 'Real-time transaction clearing system deployed on global edge nodes.',
    metrics: { latency: '8ms', throughput: '450k tx/s', uptime: '99.999%' },
    technologies: ['Wasm', 'Go', 'Redis', 'Cloudflare'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85',
    fullDescription: `Edge Ledger is a revolutionary real-time transaction clearing system designed for the modern fintech landscape. By deploying on global edge nodes, we've achieved unprecedented performance in financial transaction processing.

## Key Features

- **8ms Settlement Time**: Near-instant transaction confirmation
- **450k Transactions/Second**: High-throughput processing capability
- **99.999% Uptime**: Five-nines reliability with geo-redundancy
- **Zero-Knowledge Proofs**: Privacy-preserving transaction verification

## Technical Architecture

Built with WebAssembly for cross-platform execution, Go for high-performance networking, Redis for ultra-fast caching, and deployed on Cloudflare's global edge network for minimal latency.

## Impact

Currently processing transactions for 12+ financial institutions across Africa, handling over $2B in monthly transaction volume with zero security incidents.`,
  },
  {
    id: 'quantum-mesh',
    title: 'Quantum Mesh',
    category: 'Network Security',
    description: 'Post-quantum encrypted data mesh for secure enterprise communication.',
    metrics: { encryption: 'AES-GCM-256', nodes: '12.4k', integrity: 'Verified' },
    technologies: ['C++', 'K8s', 'eBPF', 'gRPC'],
    image: 'https://images.unsplash.com/photo-1591439657848-9f4b9ce436b9?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85',
    fullDescription: `Quantum Mesh is our answer to the looming quantum computing threat. This post-quantum encrypted data mesh provides enterprise-grade security that will remain secure even against quantum attacks.

## Key Features

- **AES-GCM-256 Encryption**: Military-grade encryption standards
- **12.4k Active Nodes**: Globally distributed mesh network
- **Verified Integrity**: Real-time tamper detection and prevention
- **Quantum-Resistant Algorithms**: Future-proof cryptographic protocols

## Technical Architecture

Implemented in C++ for maximum performance, orchestrated with Kubernetes, secured with eBPF for kernel-level monitoring, and communicating via gRPC for efficient inter-service communication.

## Impact

Protecting critical infrastructure for 50+ enterprises, including government agencies and financial institutions, with zero successful breach attempts since deployment.`,
  },
  {
    id: 'biotech-os',
    title: 'BioTech OS',
    category: 'Life Sciences',
    description: 'Distributed operating system for automated lab experimentation.',
    metrics: { uptime: '100%', sequences: '4M/day', sensors: '800+' },
    technologies: ['Embedded Rust', 'MQTT', 'React', 'InfluxDB'],
    image: 'https://images.unsplash.com/photo-1518773553398-650c184e0bb3?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85',
    fullDescription: `BioTech OS is a specialized distributed operating system designed for automated laboratory experimentation. It enables researchers to run complex experiments with minimal human intervention while maintaining full control and observability.

## Key Features

- **100% Uptime**: Critical for long-running experiments
- **4M Sequences/Day**: High-throughput biological data processing
- **800+ Sensor Integration**: Support for diverse lab equipment
- **Real-time Monitoring**: Live experiment tracking and alerts

## Technical Architecture

Built with Embedded Rust for reliability and safety, MQTT for device communication, React for intuitive dashboards, and InfluxDB for time-series data storage and analysis.

## Impact

Currently deployed in 15 research institutions across Africa, accelerating drug discovery and genetic research by reducing experiment setup time by 80%.`,
  },
]
