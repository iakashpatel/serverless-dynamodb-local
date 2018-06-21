# Serverless and DynamoDB Boilerplate Offline ready

## Prerequisite

* NodeJs >= V.6
* install serverless globally

  ```
  npm install -g serverless
  ```

* AWS-CLI to generate credentials(fake allowed), Refer: [Here](https://docs.aws.amazon.com/cli/latest/userguide/cli-install-macos.html) ... after installing aws-cli type following command and set your credentials(***fake allowed***)

  ```
  aws configure
  ```

* JAVA Development KIT, get it for your platform from [Here](http://www.oracle.com/technetwork/java/javase/downloads/index.html)

## Quick Start

* Clone repo:

```
git clone https://github.com/iakashpatel/serverless-aws-boilerplate-offline.git
```
* install dependencies:

```
npm install
```
* Run Server


  - In your project root run:

    ```
    serverless offline start
    ```

    or

    ```
    sls offline start.
    ```

- to list all the options for the plugin run:

```
sls offline --help
```
- Serverless url: ```http://localhost:3000/```
- dynamo shell url: ```http://localhost:8000/shell/```

## Reference

* serverless-offline guide: [Click here](https://www.npmjs.com/package/serverless-offline)
* aws serverless guide here: [Click here](https://serverless.com/framework/docs/providers/fn/guide/quick-start/)
* DyanomoDB Programming: [Click here](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GettingStarted.NodeJs.04.html) AND [Here](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/dynamodb-example-table-read-write.html)
