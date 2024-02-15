# Home Energy Assessment Database & API Functional Requirements
Welcome to the Zwell Open Source project! As a social purpose corporation, Zwell is dedicated to advancing carbon-neutral, sustainable energy solutions for homes. Our mission is to foster diverse, healthy communities by providing innovative and accessible energy efficiency tools and services.

The primary goal of the Residential Home Energy Database & API is to consolidate diverse data sources into a unified platform that enables accurate calculation of a home's carbon footprint. This calculation will consider various factors, including local energy grid mix, weather conditions, and specific home attributes such as age, size, construction materials, and mechanical systems. The project aims to address the critical need for accessible and reliable data to support the development of home energy savings calculators, enable detailed analyses, and facilitate the creation of visualizations pertaining to residential home energy consumption and efficiency.
This platform seeks to empower climate tech startups, academic researchers, and other stakeholders with the data necessary to innovate, study, and propose solutions aimed at reducing residential energy consumption and its environmental impact. By providing a comprehensive and easily accessible API, the project aspires to catalyze advancements in home energy efficiency, support policy development, and contribute to a more sustainable future.

# Document Conventions

This document will follow standard conventions for a Functional Requirements Document to ensure clarity and consistency. These include:

- **Bold Text**: Used for headings, titles, and to emphasize key points.
- *Italic Text*: Indicates new terms or phrases that are defined in the glossary section.
- Bullet Points: Used for lists, features, and requirements to improve readability.
- `Code Blocks`: When referencing API endpoints or code snippets, these will be presented in a monospaced font.
- [MUST, SHOULD, MAY]: These keywords are used to describe the necessity of requirements, following the conventions of RFC 2119. "MUST" indicates a requirement that is essential and mandatory for the system's functionality. "SHOULD" indicates a recommendation that is highly encouraged but not strictly required. "MAY" suggests optional features or functionalities.

## Intended Audience and Reading Suggestions

This FRD is intended for multiple audiences with interest or involvement in climate science and the development of tools aimed at reducing carbon emissions from the residential home energy sector. Specifically, the document is designed for:

- Engineers (Students, Professionals, Hobbyists): Those with a technical background and an interest in applying their skills to climate science and global warming solutions. It is recommended that engineers focus on the sections detailing system features, external interface requirements, and non-functional requirements to understand how the system's design and functionality align with technical standards and practices.
- Climate Entrepreneurs: Individuals or teams building innovative tools and solutions for the residential home energy sector to combat climate change. Entrepreneurs should pay particular attention to the overall description, system features, and the opportunities for integration and application of the API in developing their products.

**Reading Suggestions**: All readers are encouraged to begin with the Introduction and Overall Description sections to understand the project's scope and objectives. Technical readers may then focus on specific sections relevant to their expertise, while non-technical stakeholders may benefit from reviewing the system features and non-functional requirements to gain insight into the project's potential impact.

## Project Scope

The project will include the development of a comprehensive database and an accessible API designed to aggregate and provide data related to residential home energy use, including but not limited to local energy grid mixes, weather conditions, and home-specific attributes. It aims to support the creation of tools for calculating home energy savings and visualizing energy consumption data.

### In Scope:

- Aggregation of diverse data sources relevant to home energy use.
- Development of an API to provide easy access to this data.
- Tools and documentation to support API integration for various user groups.

### Out of Scope:

- Direct development of end-user applications or visualizations; the project will provide the data foundation for such tools but not the tools themselves.
- Data unrelated to residential energy consumption, such as commercial or industrial energy data.

## Overall Description

### Product Perspective

The "Residential Home Energy Database & API" is designed to be an integral component within the ecosystem of climate tech and academic research, interfacing seamlessly with existing and future systems, platforms, or initiatives. By sourcing data from a comprehensive array of reliable government, association, and private sources, as well as developing proprietary calculations where necessary, the platform ensures high-quality, accurate information. The database and API act as a foundational layer, supporting a wide range of applications from home energy audits to climate research projects.

The platform aggregates and synthesizes dynamic and static data from diverse sources, including but not limited to:

- Government databases for weather and energy production data.
- Association standards for appliance efficiencies.
- Private sector data for fuel and utility costs.
- Proprietary logic for solar insolation, heating and cooling, water heating, and energy generation.

This aggregation provides a unique, invaluable resource for developers, researchers, and climate entrepreneurs seeking to create tools and solutions in the residential energy sector.

The platform is intended not only as a standalone solution but also for integration with other tools and platforms. Future expansions aim to incorporate consumer utility data, rebate and incentive information, and potentially GPS data, enhancing its utility and applicability across a broader range of use cases.

### Product Functions

The core functionalities of the "Residential Home Energy Database & API" include:

- **Data Aggregation**: Compiles information from a variety of sources to offer a comprehensive view of factors affecting residential energy use and efficiency.
- **API Access**: Provides easy access to this aggregated data through a well-documented and user-friendly API, enabling developers and researchers to integrate this data into their own applications and studies.
- **Analytics Capabilities**: Supports analysis of the data to uncover insights related to home energy use, potential savings, and environmental impact.
- **Integration Features**: Designed with the flexibility to integrate with other systems, enhancing its utility for a variety of applications in the climate tech and academic sectors.

## User Classes and Characteristics

Besides engineers and climate entrepreneurs, the platform is anticipated to serve academic researchers, policy makers, and homeowners interested in energy efficiency and carbon footprint reduction. Each user group has unique needs:

- **Academic Researchers**: Require detailed, accurate data for climate studies, policy analysis, and educational purposes.
- **Policy Makers**: Seek reliable data to inform legislation, incentives, and programs aimed at reducing residential energy consumption.
- **Homeowners**: Need simple, actionable insights into how they can reduce their energy use and carbon footprint.

## Operating Environment

The "Residential Home Energy Database & API" is built on a robust, modern technology stack tailored for high performance, scalability, and ease of integration. At its core, the platform utilizes a Node.js framework for the backend, leveraging the Express framework to handle API requests efficiently and MongoDB for data storage. This choice of technologies ensures that the system is both flexible and capable of managing large volumes of data effectively.

## Design and Implementation Constraints

Given the project's technical foundation and objectives, some potential constraints might include:

- **Data Privacy and Security**: Ensuring compliance with global data protection regulations (e.g., GDPR, CCPA) when handling user data, especially if integrating consumer utility data in the future.
- **Data Accuracy and Reliability**: Maintaining high standards of data quality, given the diverse sources of information, including government databases, association standards, and proprietary calculations.
- **Open Source Licensing Compliance**: Adhering to the requirements of the GNU General Public License, especially in terms of distributing modifications and ensuring that the community benefits from shared improvements.
- **Scalability**: While AWS hosting provides scalability, careful management of resources and cost-effective scaling strategies will be necessary to handle potential high demand and large datasets.
- **Technology Stack Compatibility**: Ensuring that the chosen technology stack (Node.js, Express, MongoDB) remains up-to-date and compatible with emerging standards and security practices.

## User Documentation

We need help developing comprehensive documentation, including:

- **API Documentation**: Detailed technical documentation of the API endpoints, request/response formats, authentication methods, and error handling. This documentation will include examples to facilitate easy integration.
- **Developer Guide**: A guide focusing on how to set up, configure, and deploy the database and API from the provided source code. It will also cover contributing guidelines for developers looking to contribute to the project.
- **Installation Instructions**: Step-by-step instructions for users who opt to download and run their own instance of the database and API, including prerequisites, setup, and basic configuration.
- **Use Case Examples**: Practical examples illustrating how the API can be used for developing applications, conducting research, or generating insights into home energy efficiency.
- **FAQs and Troubleshooting**: A section addressing common questions and issues to help users resolve problems quickly and understand the platform's capabilities and limitations.

## System Features and Requirements

This section will detail the specific functionalities that the "Residential Home Energy Database & API" must provide, organized by major feature areas. Each feature will include a description, priority, and detailed functional requirements.

### Data Aggregation and Management

**Description**: The system must efficiently aggregate, store, and manage data from various sources, ensuring accuracy and timeliness.
**Priority**: High
**Functional Requirements**:
- Integration capabilities for pulling data from specified government, private, and association databases.
- Automated processes for updating data as new information becomes available from sources.
- Robust data validation and cleaning mechanisms to ensure data quality.

### API Access and Integration

**Description**: Provide secure, reliable, and easy-to-use API access to the aggregated data, supporting various use cases from application development to academic research.
**Priority**: High
**Functional Requirements**:
- Secure authentication mechanisms for API users.
- Rate limiting and usage monitoring to ensure fair use and system stability.
- Comprehensive logging of API usage for monitoring and troubleshooting.

### User Engagement and Contribution

**Description**: Encourage and facilitate community engagement and contributions to the database and API, including data corrections, enhancements, and new data sources.
**Priority**: Medium
**Functional Requirements**:
- A submission process for community-contributed data and corrections.
- Guidelines and templates for contributions to ensure consistency and quality.
- Review and approval workflow for integrating community contributions into the database.

### System Features and Requirements

#### Data Aggregation and Management

##### Regional Climate Data

**Current State**: Contains metrics such as average temperature, Heating Degree Days (HDD), Cooling Degree Days (CDD), and solar insolation, organized by date and zip code.
**Improvements**: Expand the dataset to cover the past hundred years, enhancing the depth and utility of the climate data for long-term analysis and trend identification.

##### Water Data

**Current State**: Includes average water temperature data, with dimensions of date and zip code.
**Improvements**: Aim to extend historical data coverage to the past hundred years to support comprehensive analysis of water temperature trends and their impact on home energy use.

##### Appliance Data

**Current State**: Currently holds averaged efficiency and energy consumption metrics for some modern appliance models, categorized by end use, type, fuel type, and year.
**Improvements**:
- Expand to include detailed energy consumption data across a broader and historical range of appliances.
- Integrate data from sources like the Air-Conditioning, Heating, and Refrigeration Institute (AHRI) to enrich the dataset with diverse appliance types and their efficiencies.

##### Fuel Data (National Averages)

**Current State**: Captures fuel cost metrics, organized by fuel type, unit, and date.
**Improvements**: Enhance the dataset to include historical fuel cost data spanning the past hundred years, facilitating analysis of fuel cost trends over time.

##### Conversions

**Current State**: Provides unit conversions to British Thermal Units (BTU), considered complete but open to verification.
**Improvements**: Implement a verification process to ensure the accuracy and reliability of conversion formulas, maintaining the integrity of energy calculations.

##### Incentives

**New Requirement**: Develop a comprehensive database to store and collect information on tax incentives and rebates for energy efficiency and renewable energy investments, accessible at both local and national levels.
**Functional Requirements**:
- Mechanism to aggregate current and historical incentives data from various government and private sources.
- Integration capabilities with external databases and APIs to continually update and verify incentive information.
- User-friendly access through the API to query incentives based on location, technology, or other relevant criteria.

##### Utilities Data

**New Requirement**: Creation of a new dataset to store information on utilities, specifically focusing on the number of homes served.
**Current State**: This data table does not currently exist within the system.
**Improvements**:
**Functional Requirements**:
- Develop a data model to capture the metrics of homes served by utility companies, with dimensions including utility name and zip code.
- Implement data aggregation mechanisms to collect this information from utility companies, government reports, or energy databases.
- Ensure the ability to update this information periodically to reflect changes in utility coverage or service expansions.

##### Energy Generation (local) Data

**Current State**: Possesses a dataset that includes metrics on BTUs generated and the cost per BTU, but lacks specificity regarding utility companies.
**Improvements**:
- Expand the dataset to include dimensions for utility name and fuel type, enhancing the ability to provide precise energy generation data at a local utility level.
**Functional Requirements**:
- Update data aggregation processes to collect energy generation data by utility, including the types of fuel used.
- Develop integration capabilities with external energy information systems to access up-to-date and accurate data.
- Implement validation and normalization processes to ensure data consistency and reliability across different utilities.

### Functional Requirements

For each data category, the system must support:

- **Data Aggregation**: Integration capabilities for pulling data from specified government, private, and association databases. Automated processes for updating data as new information becomes available.
- **Data Management**: Robust data validation and cleaning mechanisms to ensure data quality. Scalable storage solutions to handle the increasing volume of historical and real-time data.
- **API Access and Integration**: Secure, reliable, and efficient access to aggregated data, supporting a wide range of applications from academic research to application development.
- **User Engagement and Contribution**: A framework to encourage community contributions, such as data corrections or new data sources, with a review and approval process to maintain data quality.

### Performance Requirements

- **Response Time**: The system should respond to API requests within 2 seconds under normal load conditions.
- **Throughput**: The API must support at least 100 concurrent requests without significant degradation in performance.
- **Scalability**: The system must be able to scale horizontally to handle increased load, facilitated by cloud services like AWS's Elastic Load Balancer and Auto Scaling groups.
- **Data Processing**: Large datasets must be processed and made available through the API within acceptable timeframes, not exceeding 24 hours from the time of data receipt.

### Security Requirements

- **Data Encryption**: All data transmitted over the internet must be encrypted using TLS (Transport Layer Security). Sensitive data stored in databases should be encrypted at rest.
- **Authentication and Authorization**: The API must implement secure authentication mechanisms, such as OAuth 2.0, to control access. Role-based access control (RBAC) should be used to limit access to sensitive operations based on user roles.
- **Compliance**: The system must comply with relevant data protection regulations, such as GDPR for European users, including data minimization, right to access, and right to deletion.
- **Vulnerability Management**: Regular security audits and vulnerability assessments should be conducted. Dependencies, particularly open-source libraries, must be kept up-to-date to mitigate known security vulnerabilities.

### Software Quality Attributes

- **Reliability**: The system must ensure high availability, aiming for 99.9% uptime, and implement robust error handling and redundancy to minimize downtime.
- **Maintainability**: Code should follow industry-standard best practices, including comprehensive documentation, adherence to coding standards (such as those provided by Airbnb for React and Node.js), and modular architecture to facilitate updates and maintenance.
- **Scalability**: Besides horizontal scalability, the system's architecture should support scaling efforts with minimal changes. This includes stateless application design and efficient database indexing and queries.
- **Usability**: For any user-facing components, the interface should be intuitive and user-friendly, adhering to accessibility standards such as WCAG for users with disabilities. API documentation should be clear, concise, and complete with examples to facilitate ease of use by developers.
