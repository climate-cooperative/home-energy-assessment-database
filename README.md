# Residential Home Energy Database & API Functional Requirements
Welcome to the Zwell Open Source project! As a social purpose corporation, Zwell is dedicated to advancing carbon-neutral, sustainable energy solutions for homes. Our mission is to foster diverse, healthy communities by providing innovative and accessible energy efficiency tools and services.

The primary goal of the Residential Home Energy Database & API is to consolidate diverse data sources into a unified platform that enables accurate calculation of a home's carbon footprint. This calculation will consider various factors, including local energy grid mix, weather conditions, and specific home attributes such as age, size, construction materials, and mechanical systems. The project aims to address the critical need for accessible and reliable data to support the development of home energy savings calculators, enable detailed analyses, and facilitate the creation of visualizations pertaining to residential home energy consumption and efficiency.

This platform seeks to empower climate tech startups, academic researchers, and other stakeholders with the data necessary to innovate, study, and propose solutions aimed at reducing residential energy consumption and its environmental impact. By providing a comprehensive and easily accessible API, the project aspires to catalyze advancements in home energy efficiency, support policy development, and contribute to a more sustainable future.

## Document Conventions

- **Bold Text**: Used for headings, titles, and key points emphasis.
- *Italic Text*: Indicates new terms or phrases defined in the glossary.
- Bullet Points: Improve readability for lists, features, and requirements.
- `Code Blocks`: For referencing API endpoints or code snippets.
- **[MUST, SHOULD, MAY]**: Describe requirements' necessity, following RFC 2119 conventions.

## Intended Audience and Reading Suggestions

This document targets engineers, climate entrepreneurs, and others involved in climate science or reducing carbon emissions from residential energy. It is structured to guide readers through the project's scope, objectives, and detailed system requirements.

- **Engineers**: Focus on system features, external interface requirements, and non-functional requirements.
- **Climate Entrepreneurs**: Pay attention to the overall description, system features, and API integration opportunities.

**Reading Suggestions**: Start with the Introduction and Overall Description, then explore sections relevant to your interests or expertise.

## Project Scope

The project will develop a database and API aggregating data on residential home energy use, supporting tools for energy savings calculation and data visualization.

### In Scope

- Aggregating diverse data sources related to home energy use.
- Developing an API for easy data access.
- Providing tools and documentation for API integration.

### Out of Scope

- Developing end-user applications or visualizations directly.
- Data unrelated to residential energy consumption.

## Overall Description

### Product Perspective

The Residential Home Energy Database & API is an integral part of the climate tech ecosystem, ensuring high-quality, accurate information from various sources. It serves as a foundational layer for applications ranging from home energy audits to climate research projects.

#### Data Sources Include

- Government databases for weather and energy data.
- Association standards for appliance efficiencies.
- Private sector data for fuel and utility costs.
- Proprietary calculations for solar insolation and energy generation.

*See the specific [documentation of the API's data sources](DOCUMENTATION.md)*

### Product Functions

- **Data Aggregation**: Compiles comprehensive information on residential energy use.
- **API Access**: Offers easy access to aggregated data through a user-friendly API.
- **Analytics Capabilities**: Supports data analysis for insights on energy use and savings.
- **Integration Features**: Facilitates integration with other systems and applications.

## User Classes and Characteristics

- **Academic Researchers**: Need accurate data for climate studies and policy analysis.
- **Policy Makers**: Seek reliable data for developing energy reduction programs.
- **Homeowners**: Desire insights for reducing energy use and carbon footprint.

## Operating Environment

Built on a modern tech stack including Node.js, Express, and MongoDB, the platform is designed for high performance, scalability, and ease of integration.

## Design and Implementation Constraints

Challenges include data privacy and security, data accuracy, open source licensing compliance, scalability, and technology stack compatibility.

## User Documentation

Necessary documentation includes API guides, developer setup instructions, installation steps, use case examples, and troubleshooting FAQs.

## System Features and Requirements

Detailed specifications for data aggregation and management, API access, user engagement, and contribution, emphasizing security, performance, and quality attributes.

### Data Categories and Functional Requirements

- **Regional Climate Data**: Expand dataset coverage to 100 years.
- **Water Data**: Extend historical data range for comprehensive analysis.
- **Appliance Data**: Include detailed energy consumption data across a broader range.
- **Fuel Data**: Enhance dataset with historical fuel cost data.
- **Conversions**: Verify accuracy of energy conversion formulas.
- **Incentives**: Aggregate data on energy efficiency incentives.
- **Utilities Data**: Develop a dataset for information on utilities.
- **Energy Generation Data**: Expand dataset for local energy generation specifics.

### Performance Requirements

- **Response Time**: API requests should respond within 2 seconds.
- **Throughput**: Support 100 concurrent requests without performance degradation.
- **Scalability**: System must scale horizontally to manage increased load efficiently.

### Security Requirements

- **Data Encryption**: TLS for data in transit, encryption at rest for sensitive data.
- **Authentication and Authorization**: Secure mechanisms like OAuth 2.0, with RBAC.
- **Compliance**: Adhere to data protection regulations like GDPR.
- **Vulnerability Management**: Conduct regular security audits and update dependencies.

### Software Quality Attributes

- **Reliability**: Aim for 99.9% uptime with robust error handling.
- **Maintainability**: Follow best practices and standards for easy updates.
- **Scalability**: Support scaling efforts with minimal architectural changes.
- **Usability**: Ensure user-friendly interfaces and comprehensive API documentation.
