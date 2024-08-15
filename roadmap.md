# CC RoadMap

### Context

High level (epics) to help road map where and what cc should strive for.

Each section below is a sector that contains "epics" that support the respective larger object. These "epics" are one of two things; 1) a spike or research item or 2) an encompessment of smaller stories within the same concern.

This list the roughest of drafts, and most likely will change; grow or shrink.

## Project Management

Tooling and practices that will be used to keep track of all of CC work.

- Find technical project tracker
    - create Github Project (kiss 2 pre-dev and dev-ready project)
    - wire up to repos
    - research free tier
- promote our communication channels
    - publish discord on the repo readme
    - discord channels (FE, BE, DATA, DESIGN)
    - github - PR, ISSUES, DISCUSSIONS
    - (Communication) Code of Conduct - review/fix/create
- Setup team patterns/practices
    - define and publish roles/responsibilities
    - issue refinement
    - define "does it make you faster" - famous racecar driver
    - define a bug vs feature/story/issue
    - make roadmap
    - how do we evolve the roadmap (stay consistent with mission but fluid enough for creative contribution)
    - feedback loop and implementation
- Issue/story lifecycle
    - dream | discover | design | dev | deliver | done (all this context lives in the issue) - feature work
    - definition of done
    - feature template
    - bug template (complexity tag)
    - when to elevate bug to feature
- ux tooling (spike)
    - make style guide
    - open source component library
    - design submission rules
    - design approval flow (should be crowdsourced)

## Data Ingress

In order to utilize the best data, we need to get that data. Data Ingress will cover all the work related to finding, getting, and processing incoming data.

- wiremock
- setup repo(s)/boilerplate
- micro FE work
- Getting Started documentation
- feature work
- integration testing*

## Consumer FE

The Consumer FE's are broken into 3 categories:

- Evalution     - consumer find information specific to their scenario
- Action        - consumer is presented with actions to take for their scenario
- Analysis      - consumers can find macro level analysis - lots to play with here :)

Each of the categories areas will conatin its own set of the following epics

- Evaluation side - feature work
- Action Side (contractors) - feature work
- Analysis Side - feature work
- wiremock
- setup repos/boilerplate
- micro FE work
- integration testing
- Getting Started documentation

## Core API

The guts of it all. Service(s) that will control core logic

- Audit what we have
- Dissect the data model
- Architect if need be
- feature work
- integration testing
- Analysis api
- Move Logic from FE to api

## DATA

Maybe the actual guts. What seperates us from the others. Highly usable and relevant

- audit what we have - quality and quantity (spike)
- what do we need (spike)
- high level model (table height)
- Data Model - Good Luck
- How do we want to process it


## Notes

### Micro FE

A micro FE is a front-end pattern where each FE project is just a module, and can be imported and used in any other supporting FE or website. We think that this is the most beneficial was to architect our FE's due to the ability to 1) not have to construct/maintain a stand-alone cc website, 2) anyone can plug-n-play into their own sites 3) Better seperation of concern of what CC should be responsible for, and what others should have.

[Learn More about micro fe's](https://micro-frontends.org/)
