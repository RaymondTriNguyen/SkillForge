import { Skill, Testimonial } from '../types';

export const skills: Skill[] = [
  {
    id: 'react-fundamentals',
    title: 'React Fundamentals',
    description: 'Master the core concepts of React including components, hooks, and state management',
    category: 'programming',
    difficulty: 'beginner',
    duration: '2 hours',
    icon: 'Code',
    lessons: [
      {
        id: 'react-1',
        title: 'Introduction to React',
        content: `# Introduction to React

React is a powerful JavaScript library for building user interfaces. Created by Facebook, it has become one of the most popular tools for web development.

## What is React?

React allows developers to create large web applications that can update and render efficiently in response to data changes. The main concept behind React is to build reusable UI components.

## Key Concepts

**Components**: The building blocks of React applications. They are reusable pieces of code that return HTML elements.

**JSX**: A syntax extension that allows you to write HTML-like code in JavaScript.

**Virtual DOM**: React creates a virtual representation of the DOM, making updates more efficient.

## Why Use React?

- **Component-Based Architecture**: Break down complex UIs into smaller, manageable pieces
- **Reusability**: Write once, use everywhere
- **Performance**: Virtual DOM ensures optimal rendering
- **Large Ecosystem**: Thousands of libraries and tools available

## Getting Started

To start using React, you'll need Node.js installed. Then create a new project:

\`\`\`bash
npx create-vite@latest my-app --template react-ts
cd my-app
npm install
npm run dev
\`\`\`

This creates a new React application with TypeScript support, giving you a solid foundation to build upon.`,
        order: 1,
      },
      {
        id: 'react-2',
        title: 'Components and Props',
        content: `# Components and Props

Components are the heart of React. They let you split the UI into independent, reusable pieces.

## Functional Components

Modern React uses functional components with hooks:

\`\`\`tsx
function Welcome({ name }: { name: string }) {
  return <h1>Hello, {name}</h1>;
}
\`\`\`

## Props

Props (properties) are how you pass data from parent to child components:

\`\`\`tsx
function UserCard({ name, email, role }: UserCardProps) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>{email}</p>
      <span>{role}</span>
    </div>
  );
}

// Usage
<UserCard name="John Doe" email="john@example.com" role="Developer" />
\`\`\`

## Component Composition

Build complex UIs by combining simple components:

\`\`\`tsx
function App() {
  return (
    <div>
      <Header />
      <Sidebar />
      <MainContent />
      <Footer />
    </div>
  );
}
\`\`\`

## Best Practices

- Keep components small and focused
- Use meaningful names
- Extract reusable logic
- Use TypeScript for type safety`,
        order: 2,
      },
      {
        id: 'react-3',
        title: 'State and Hooks',
        content: `# State and Hooks

Hooks let you use state and other React features in functional components.

## useState Hook

Manage component state:

\`\`\`tsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
\`\`\`

## useEffect Hook

Handle side effects like data fetching:

\`\`\`tsx
import { useEffect, useState } from 'react';

function UserProfile({ userId }: { userId: string }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUser(userId).then(setUser);
  }, [userId]);

  return <div>{user?.name}</div>;
}
\`\`\`

## Custom Hooks

Create reusable stateful logic:

\`\`\`tsx
function useLocalStorage(key: string, initialValue: any) {
  const [value, setValue] = useState(() => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
\`\`\`

## Rules of Hooks

- Only call hooks at the top level
- Only call hooks from React functions
- Use the ESLint plugin to enforce these rules`,
        order: 3,
      },
    ],
  },
  {
    id: 'aws-cloud-basics',
    title: 'AWS Cloud Basics',
    description: 'Learn the fundamentals of Amazon Web Services and cloud computing',
    category: 'cloud',
    difficulty: 'beginner',
    duration: '3 hours',
    icon: 'Cloud',
    lessons: [
      {
        id: 'aws-1',
        title: 'Introduction to Cloud Computing',
        content: `# Introduction to Cloud Computing

Cloud computing has revolutionized how we build and deploy applications. Instead of managing physical servers, you can rent computing resources on-demand.

## What is Cloud Computing?

Cloud computing is the delivery of computing services over the internet ("the cloud"):
- Servers
- Storage
- Databases
- Networking
- Software
- Analytics

## Benefits

**Cost Savings**: Pay only for what you use, no upfront hardware costs

**Scalability**: Scale resources up or down based on demand

**Reliability**: Data backup, disaster recovery, and business continuity

**Performance**: Regular upgrades to the latest hardware

**Security**: Advanced security features and compliance certifications

## Service Models

**IaaS (Infrastructure as a Service)**: Raw computing resources (EC2, Azure VMs)

**PaaS (Platform as a Service)**: Platform for developing apps (Heroku, Google App Engine)

**SaaS (Software as a Service)**: Complete applications (Gmail, Salesforce)

## AWS Overview

Amazon Web Services (AWS) is the world's most comprehensive cloud platform with over 200 services. Key services include:

- **EC2**: Virtual servers
- **S3**: Object storage
- **RDS**: Managed databases
- **Lambda**: Serverless computing
- **VPC**: Virtual private cloud`,
        order: 1,
      },
      {
        id: 'aws-2',
        title: 'AWS Core Services',
        content: `# AWS Core Services

Let's explore the essential AWS services you'll use most often.

## Amazon EC2 (Elastic Compute Cloud)

Virtual servers in the cloud. Launch instances with your choice of:
- Operating system
- CPU, memory, storage
- Network configuration

**Use Cases**: Web servers, application servers, development environments

## Amazon S3 (Simple Storage Service)

Object storage for any type of data:
- Highly durable (99.999999999%)
- Scalable to exabytes
- Pay for what you store

**Use Cases**: Backup, static website hosting, data lakes

## Amazon RDS (Relational Database Service)

Managed relational databases:
- MySQL, PostgreSQL, Oracle, SQL Server
- Automated backups
- Multi-AZ deployment for high availability

## AWS Lambda

Run code without managing servers:
- Pay only for compute time
- Automatic scaling
- Event-driven execution

**Use Cases**: APIs, data processing, automation

## Amazon VPC (Virtual Private Cloud)

Isolated network in AWS:
- Define IP address range
- Create subnets
- Configure route tables and gateways

## Getting Started

1. Create an AWS account
2. Use the Free Tier to experiment
3. Follow the principle of least privilege
4. Enable MFA for security`,
        order: 2,
      },
    ],
  },
  {
    id: 'docker-containers',
    title: 'Docker & Containers',
    description: 'Master containerization with Docker for consistent development and deployment',
    category: 'devops',
    difficulty: 'intermediate',
    duration: '2.5 hours',
    icon: 'Package',
    lessons: [
      {
        id: 'docker-1',
        title: 'Container Fundamentals',
        content: `# Container Fundamentals

Containers package software with all its dependencies, ensuring consistent behavior across environments.

## What are Containers?

Containers are lightweight, standalone packages that include:
- Application code
- Runtime
- System tools
- Libraries
- Settings

## Containers vs Virtual Machines

**Containers**:
- Share the host OS kernel
- Lightweight (MBs)
- Start in seconds
- More portable

**Virtual Machines**:
- Include full OS
- Heavy (GBs)
- Start in minutes
- More isolated

## Why Use Containers?

**Consistency**: "Works on my machine" becomes "Works everywhere"

**Efficiency**: Better resource utilization than VMs

**Speed**: Fast startup and deployment

**Isolation**: Each container runs independently

**Portability**: Run anywhere - laptop, cloud, on-premises

## Docker Basics

Docker is the most popular container platform.

\`\`\`dockerfile
# Example Dockerfile
FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npm", "start"]
\`\`\`

Build and run:

\`\`\`bash
docker build -t my-app .
docker run -p 3000:3000 my-app
\`\`\``,
        order: 1,
      },
      {
        id: 'docker-2',
        title: 'Docker in Practice',
        content: `# Docker in Practice

Learn practical Docker patterns and best practices.

## Multi-Stage Builds

Reduce image size by separating build and runtime:

\`\`\`dockerfile
# Build stage
FROM node:18 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production stage
FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY package*.json ./
RUN npm install --production
CMD ["node", "dist/index.js"]
\`\`\`

## Docker Compose

Manage multi-container applications:

\`\`\`yaml
version: '3.8'
services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - DATABASE_URL=postgres://db:5432/myapp
    depends_on:
      - db
  db:
    image: postgres:15
    volumes:
      - postgres-data:/var/lib/postgresql/data

volumes:
  postgres-data:
\`\`\`

## Best Practices

1. **Use official base images**: Start with trusted sources
2. **Minimize layers**: Combine RUN commands
3. **Use .dockerignore**: Exclude unnecessary files
4. **Don't run as root**: Create a non-root user
5. **Pin versions**: Avoid "latest" tags in production`,
        order: 2,
      },
    ],
  },
  {
    id: 'python-data-science',
    title: 'Python for Data Science',
    description: 'Learn data analysis and visualization with Python, pandas, and matplotlib',
    category: 'data',
    difficulty: 'intermediate',
    duration: '4 hours',
    icon: 'BarChart',
    lessons: [
      {
        id: 'python-ds-1',
        title: 'NumPy and Data Structures',
        content: `# NumPy and Data Structures

NumPy is the foundation of data science in Python.

## Why NumPy?

NumPy provides:
- Fast array operations
- Mathematical functions
- Linear algebra operations
- Random number generation

## Arrays

Create and manipulate arrays:

\`\`\`python
import numpy as np

# Create arrays
arr = np.array([1, 2, 3, 4, 5])
matrix = np.array([[1, 2, 3], [4, 5, 6]])

# Array operations
arr * 2  # [2, 4, 6, 8, 10]
arr + 10  # [11, 12, 13, 14, 15]
np.mean(arr)  # 3.0
np.std(arr)  # 1.41
\`\`\`

## Indexing and Slicing

\`\`\`python
arr = np.array([10, 20, 30, 40, 50])

arr[0]     # 10
arr[-1]    # 50
arr[1:4]   # [20, 30, 40]
arr[::2]   # [10, 30, 50]

# Boolean indexing
arr[arr > 25]  # [30, 40, 50]
\`\`\`

## Useful Functions

\`\`\`python
np.zeros((3, 3))  # 3x3 array of zeros
np.ones((2, 4))   # 2x4 array of ones
np.arange(0, 10, 2)  # [0, 2, 4, 6, 8]
np.linspace(0, 1, 5)  # 5 evenly spaced values
np.random.rand(3, 3)  # 3x3 random array
\`\`\`

## Performance

NumPy is fast because operations are vectorized:

\`\`\`python
# Slow (Python loop)
result = [x * 2 for x in range(1000000)]

# Fast (NumPy)
result = np.arange(1000000) * 2
\`\`\``,
        order: 1,
      },
    ],
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design Principles',
    description: 'Master the fundamentals of user interface and experience design',
    category: 'design',
    difficulty: 'beginner',
    duration: '2 hours',
    icon: 'Palette',
    lessons: [
      {
        id: 'design-1',
        title: 'Design Fundamentals',
        content: `# Design Fundamentals

Good design is invisible. Great design makes users feel empowered.

## Core Principles

### 1. Hierarchy

Guide users' attention through visual weight:
- Size: Larger elements draw attention
- Color: High contrast creates emphasis
- Position: Top-left gets noticed first (in Western cultures)
- Spacing: White space creates separation

### 2. Contrast

Make important elements stand out:
- Light vs dark
- Large vs small
- Thick vs thin
- Color temperature

### 3. Alignment

Create visual connections:
- Left, right, center, or justified
- Consistent alignment creates order
- Grid systems maintain alignment

### 4. Repetition

Build consistency:
- Repeated colors, fonts, spacing
- Creates unity and identity
- Makes interfaces predictable

### 5. Proximity

Group related elements:
- Items close together are perceived as related
- White space separates groups
- Reduces cognitive load

## Typography

Choose and use fonts effectively:

**Hierarchy**: Use 2-3 font sizes maximum
**Readability**: 16px minimum for body text
**Line height**: 1.5-1.6 for body text
**Line length**: 50-75 characters optimal

## Color Theory

**60-30-10 Rule**: 60% primary, 30% secondary, 10% accent

**Accessibility**: Maintain 4.5:1 contrast ratio for text

**Emotion**: Colors convey meaning
- Blue: Trust, calm
- Red: Energy, urgency
- Green: Success, growth
- Yellow: Optimism, caution`,
        order: 1,
      },
    ],
  },
  {
    id: 'kubernetes-orchestration',
    title: 'Kubernetes Orchestration',
    description: 'Deploy and manage containerized applications at scale with Kubernetes',
    category: 'devops',
    difficulty: 'advanced',
    duration: '5 hours',
    icon: 'Server',
    lessons: [
      {
        id: 'k8s-1',
        title: 'Kubernetes Architecture',
        content: `# Kubernetes Architecture

Kubernetes (K8s) is an open-source container orchestration platform.

## What is Kubernetes?

Kubernetes automates:
- Deployment
- Scaling
- Management
- Networking

of containerized applications.

## Core Concepts

### Pods

The smallest deployable unit:
- Contains one or more containers
- Shares network and storage
- Ephemeral by design

### Nodes

Worker machines in the cluster:
- Can be physical or virtual
- Run pods
- Managed by control plane

### Control Plane

Manages the cluster:
- API Server: Frontend for K8s
- Scheduler: Assigns pods to nodes
- Controller Manager: Maintains desired state
- etcd: Key-value store for cluster data

## Key Objects

**Deployment**: Manages pod replicas

\`\`\`yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx:1.14.2
        ports:
        - containerPort: 80
\`\`\`

**Service**: Exposes pods to network

**ConfigMap**: Configuration data

**Secret**: Sensitive information

## Benefits

- **Self-healing**: Restarts failed containers
- **Scaling**: Horizontal and vertical
- **Load balancing**: Distributes traffic
- **Rolling updates**: Zero-downtime deployments`,
        order: 1,
      },
    ],
  },
  {
    id: 'cybersecurity-basics',
    title: 'Cybersecurity Essentials',
    description: 'Learn fundamental security concepts and best practices to protect systems',
    category: 'security',
    difficulty: 'intermediate',
    duration: '3 hours',
    icon: 'Shield',
    lessons: [
      {
        id: 'security-1',
        title: 'Security Fundamentals',
        content: `# Security Fundamentals

Security is not optional. It's a fundamental requirement for any system.

## CIA Triad

The foundation of information security:

### Confidentiality
Ensure information is accessible only to authorized parties:
- Encryption
- Access controls
- Authentication

### Integrity
Maintain accuracy and completeness of data:
- Hashing
- Digital signatures
- Version control

### Availability
Ensure systems are accessible when needed:
- Redundancy
- Load balancing
- DDoS protection

## Common Threats

### 1. Injection Attacks

Malicious data sent to interpreters:

\`\`\`sql
-- Vulnerable code
query = "SELECT * FROM users WHERE id = " + userId;

-- Safe code (parameterized)
query = "SELECT * FROM users WHERE id = ?";
\`\`\`

### 2. Authentication Issues

- Weak passwords
- Missing MFA
- Session management flaws

### 3. Sensitive Data Exposure

- Unencrypted data in transit
- Plain text passwords
- Exposed API keys

### 4. XML External Entities (XXE)

Attackers can access local files through XML parsers

### 5. Broken Access Control

Users can act outside intended permissions

## Defense Strategies

**Defense in Depth**: Multiple layers of security

**Least Privilege**: Minimum access necessary

**Fail Securely**: Default to secure state on errors

**Security by Design**: Build security in from the start

## Best Practices

1. Keep software updated
2. Use strong authentication
3. Encrypt sensitive data
4. Validate all input
5. Log security events
6. Regular security audits
7. Incident response plan`,
        order: 1,
      },
    ],
  },
  {
    id: 'typescript-advanced',
    title: 'Advanced TypeScript',
    description: 'Deep dive into TypeScript generics, utility types, and advanced patterns',
    category: 'programming',
    difficulty: 'advanced',
    duration: '3 hours',
    icon: 'Code2',
    lessons: [
      {
        id: 'ts-1',
        title: 'Generics and Type Constraints',
        content: `# Generics and Type Constraints

Generics allow you to write reusable, type-safe code.

## Basic Generics

Create flexible functions:

\`\`\`typescript
function identity<T>(arg: T): T {
  return arg;
}

const num = identity<number>(42);
const str = identity<string>("hello");
const inferred = identity(true); // Type inferred
\`\`\`

## Generic Constraints

Restrict what types can be used:

\`\`\`typescript
interface HasLength {
  length: number;
}

function logLength<T extends HasLength>(arg: T): void {
  console.log(arg.length);
}

logLength("hello"); // ✓
logLength([1, 2, 3]); // ✓
logLength(42); // ✗ Error
\`\`\`

## Generic Interfaces

\`\`\`typescript
interface Repository<T> {
  find(id: string): Promise<T>;
  findAll(): Promise<T[]>;
  create(item: T): Promise<T>;
  update(id: string, item: T): Promise<T>;
  delete(id: string): Promise<void>;
}

class UserRepository implements Repository<User> {
  async find(id: string): Promise<User> {
    // Implementation
  }
  // ... other methods
}
\`\`\`

## Utility Types

TypeScript provides built-in utility types:

\`\`\`typescript
interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}

// Make all properties optional
type PartialUser = Partial<User>;

// Make all properties required
type RequiredUser = Required<PartialUser>;

// Pick specific properties
type UserPreview = Pick<User, 'id' | 'name'>;

// Omit specific properties
type UserPublic = Omit<User, 'password'>;

// Make all properties readonly
type ImmutableUser = Readonly<User>;
\`\`\`

## Advanced Patterns

**Mapped Types**:

\`\`\`typescript
type Nullable<T> = {
  [P in keyof T]: T[P] | null;
};

type NullableUser = Nullable<User>;
\`\`\`

**Conditional Types**:

\`\`\`typescript
type IsString<T> = T extends string ? true : false;

type A = IsString<string>; // true
type B = IsString<number>; // false
\`\`\``,
        order: 1,
      },
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    role: 'Software Engineer at Google',
    content: 'SkillForge helped me transition from frontend to full-stack development. The AI-generated lessons are incredibly relevant and practical.',
    avatar: 'SC',
  },
  {
    id: '2',
    name: 'Marcus Johnson',
    role: 'DevOps Lead at Amazon',
    content: 'The Docker and Kubernetes lessons were exactly what I needed. Clear, concise, and production-ready examples.',
    avatar: 'MJ',
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    role: 'Data Scientist at Netflix',
    content: 'Best platform for learning data science with Python. The lessons are well-structured and easy to follow.',
    avatar: 'ER',
  },
];

export const categories = [
  { id: 'programming', label: 'Programming', count: 3 },
  { id: 'cloud', label: 'Cloud', count: 1 },
  { id: 'devops', label: 'DevOps', count: 2 },
  { id: 'data', label: 'Data', count: 1 },
  { id: 'design', label: 'Design', count: 1 },
  { id: 'security', label: 'Security', count: 1 },
];
