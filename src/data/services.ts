import {

  Smartphone,
  Cpu,
  ShieldCheck,
  Cloud,
  Layers,
  Globe,

  Database,
  Link2,

  Wifi,
} from 'lucide-react'

export const services = [
  {
    id: 'ai-development',
    title: 'AI Development',
    description: 'Custom ML models, LLM integrations, and intelligent automation for your business.',
    icon: Cpu,
    technologies: ['OpenAI', 'PyTorch', 'TensorFlow', 'LangChain'],
    color: 'from-emerald-500/20 to-emerald-600/20',
    fullDescription: `Our AI development services help businesses leverage machine learning and artificial intelligence to drive innovation and efficiency.

## What We Offer

- **Custom ML Models**: Tailored machine learning solutions for your specific use cases
- **LLM Integration**: Seamless integration with large language models for enhanced capabilities
- **Intelligent Automation**: Automate complex workflows with AI-powered decision making
- **Predictive Analytics**: Data-driven insights for better business decisions

## Our Process

1. Discovery and requirements gathering
2. Data preparation and model selection
3. Training and fine-tuning
4. Deployment and monitoring
5. Continuous improvement and optimization

## Technologies

We work with cutting-edge frameworks including OpenAI, PyTorch, TensorFlow, and LangChain to build robust AI solutions.`,
  },
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'High-performance, scalable web applications built with modern frameworks.',
    icon: Globe,
    technologies: ['React', 'Next.js', 'TypeScript', 'Node.js'],
    color: 'from-purple-500/20 to-purple-600/20',
    fullDescription: `We build high-performance, scalable web applications that deliver exceptional user experiences and drive business growth.

## What We Offer

- **Custom Web Applications**: Tailored solutions for your unique requirements
- **E-commerce Platforms**: Robust online stores with seamless checkout experiences
- **Progressive Web Apps**: Fast, reliable, and engaging web experiences
- **API Development**: RESTful and GraphQL APIs for seamless integration

## Our Process

1. Requirements analysis and planning
2. UI/UX design and prototyping
3. Agile development with continuous delivery
4. Testing and quality assurance
5. Deployment and maintenance

## Technologies

We specialize in React, Next.js, TypeScript, and Node.js to build modern, performant web applications.`,
  },
  {
    id: 'mobile-apps',
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile experiences that engage users and drive growth.',
    icon: Smartphone,
    technologies: ['Flutter', 'React Native', 'iOS', 'Android'],
    color: 'from-cyan-500/20 to-cyan-600/20',
    fullDescription: `Our mobile development team creates engaging, high-performance mobile applications for iOS and Android platforms.

## What We Offer

- **Native iOS Development**: Swift and Objective-C for optimal iOS performance
- **Native Android Development**: Kotlin and Java for Android excellence
- **Cross-Platform Solutions**: Flutter and React Native for cost-effective development
- **App Maintenance**: Ongoing support and updates to keep your app current

## Our Process

1. Concept validation and market research
2. UI/UX design for mobile interfaces
3. Development with agile methodology
4. Testing across devices and OS versions
5. App store deployment and optimization

## Technologies

We work with Flutter, React Native, Swift, Kotlin, and native platform SDKs to deliver exceptional mobile experiences.`,
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    description: 'Comprehensive security audits and implementation to protect your digital assets.',
    icon: ShieldCheck,
    technologies: ['OAuth', 'Pen-Testing', 'Zero Trust', 'SOC2'],
    color: 'from-red-500/20 to-red-600/20',
    fullDescription: `Our cybersecurity services help protect your digital assets and ensure compliance with industry standards.

## What We Offer

- **Security Audits**: Comprehensive assessment of your security posture
- **Penetration Testing**: Identify vulnerabilities before malicious actors do
- **Zero Trust Implementation**: Modern security architecture for enhanced protection
- **Compliance**: Help meet SOC2, GDPR, and other regulatory requirements

## Our Process

1. Security assessment and vulnerability scanning
2. Risk analysis and prioritization
3. Security implementation and hardening
4. Continuous monitoring and incident response
5. Compliance verification and reporting

## Technologies

We implement OAuth, multi-factor authentication, encryption, and zero-trust architectures to secure your systems.`,
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps',
    description: 'Streamlined deployment pipelines and robust cloud infrastructure management.',
    icon: Cloud,
    technologies: ['AWS', 'Azure', 'Docker', 'Kubernetes'],
    color: 'from-orange-500/20 to-orange-600/20',
    fullDescription: `Our cloud and DevOps services help you build, deploy, and scale applications with confidence.

## What We Offer

- **Cloud Migration**: Seamless transition to cloud infrastructure
- **Infrastructure as Code**: Automated, reproducible infrastructure management
- **CI/CD Pipelines**: Streamlined deployment workflows
- **Monitoring & Logging**: Real-time visibility into system performance

## Our Process

1. Infrastructure assessment and planning
2. Cloud architecture design
3. Implementation and migration
4. Automation and optimization
5. Ongoing management and support

## Technologies

We work with AWS, Azure, Google Cloud, Docker, Kubernetes, and Terraform to build robust cloud infrastructure.`,
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    description: 'User-centric design that combines aesthetic beauty with intuitive functionality.',
    icon: Layers,
    technologies: ['Figma', 'Prototyping', 'User Research'],
    color: 'from-pink-500/20 to-pink-600/20',
    fullDescription: `Our UI/UX design team creates beautiful, intuitive interfaces that delight users and drive engagement.

## What We Offer

- **User Research**: Deep understanding of user needs and behaviors
- **UI Design**: Visually stunning interfaces that align with your brand
- **UX Design**: Intuitive user flows and interactions
- **Prototyping**: Interactive prototypes for validation and testing

## Our Process

1. User research and persona development
2. Information architecture and wireframing
3. Visual design and prototyping
4. User testing and iteration
5. Design system development

## Technologies

We use Figma, Sketch, Adobe XD, and various prototyping tools to create exceptional user experiences.`,
  },
 
  {
    id: 'iot',
    title: 'IoT Solutions',
    description: 'Connected devices, sensor networks, and edge computing for smart systems.',
    icon: Wifi,
    technologies: ['MQTT', 'Embedded', 'Edge AI'],
    color: 'from-teal-500/20 to-teal-600/20',
    fullDescription: `Our IoT solutions help you build connected systems that collect, analyze, and act on data from the physical world.

## What We Offer

- **Device Development**: Custom IoT hardware and firmware
- **Sensor Networks**: Scalable data collection systems
- **Edge Computing**: Processing data closer to the source
- **IoT Platforms**: Complete IoT infrastructure and management

## Our Process

1. Requirements and use case analysis
2. Hardware and software architecture design
3. Prototype development and testing
4. Deployment and integration
5. Monitoring and maintenance

## Technologies

We work with MQTT, embedded systems, edge AI frameworks, and cloud IoT platforms to build comprehensive IoT solutions.`,
  },
  {
    id: 'data-science',
    title: 'Data Science',
    description: 'Analytics, visualization, and data-driven insights to power decisions.',
    icon: Database,
    technologies: ['Python', 'Pandas', 'Spark', 'Tableau'],
    color: 'from-indigo-500/20 to-indigo-600/20',
    fullDescription: `Our data science services help you unlock the value in your data through advanced analytics and visualization.

## What We Offer

- **Data Analytics**: Transform raw data into actionable insights
- **Data Visualization**: Clear, compelling visual representations
- **Predictive Modeling**: Forecast future trends and behaviors
- **Data Engineering**: Build robust data pipelines and infrastructure

## Our Process

1. Data assessment and strategy
2. Data cleaning and preparation
3. Analysis and modeling
4. Visualization and reporting
5. Deployment and monitoring

## Technologies

We use Python, Pandas, NumPy, Spark, Tableau, and Power BI to deliver comprehensive data science solutions.`,
  },
  {
    id: 'blockchain',
    title: 'Blockchain',
    description: 'Decentralized applications, smart contracts, and Web3 infrastructure.',
    icon: Link2,
    technologies: ['Solidity', 'Ethereum', 'Web3.js'],
    color: 'from-yellow-500/20 to-yellow-600/20',
    fullDescription: `Our blockchain services help you leverage decentralized technologies for secure, transparent applications.

## What We Offer

- **Smart Contract Development**: Secure, audited smart contracts
- **DApp Development**: Decentralized applications for various use cases
- **Web3 Integration**: Connect traditional apps with blockchain networks
- **Token Development**: Custom tokens and NFT solutions

## Our Process

1. Use case analysis and feasibility
2. Architecture design and planning
3. Smart contract development and testing
4. Frontend integration
5. Deployment and monitoring

## Technologies

We work with Solidity, Ethereum, Polygon, Web3.js, and various blockchain development frameworks.`,
  },
  
  
]
