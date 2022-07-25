// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

/**
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as upstash from "@pulumi/upstash";
 *
 * const kafkaTopicData = upstash.getKafkaTopic({
 *     topicId: resource.upstash_kafka_topic.exampleKafkaTopic.topic_id,
 * });
 * ```
 */
export function getKafkaTopic(args: GetKafkaTopicArgs, opts?: pulumi.InvokeOptions): Promise<GetKafkaTopicResult> {
    if (!opts) {
        opts = {}
    }

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
    return pulumi.runtime.invoke("upstash:index/getKafkaTopic:getKafkaTopic", {
        "topicId": args.topicId,
    }, opts);
}

/**
 * A collection of arguments for invoking getKafkaTopic.
 */
export interface GetKafkaTopicArgs {
    topicId: string;
}

/**
 * A collection of values returned by getKafkaTopic.
 */
export interface GetKafkaTopicResult {
    readonly cleanupPolicy: string;
    readonly clusterId: string;
    readonly creationTime: number;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly maxMessageSize: number;
    readonly multizone: boolean;
    readonly partitions: number;
    readonly password: string;
    readonly region: string;
    readonly restEndpoint: string;
    readonly retentionSize: number;
    readonly retentionTime: number;
    readonly state: string;
    readonly tcpEndpoint: string;
    readonly topicId: string;
    readonly topicName: string;
    readonly username: string;
}

export function getKafkaTopicOutput(args: GetKafkaTopicOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetKafkaTopicResult> {
    return pulumi.output(args).apply(a => getKafkaTopic(a, opts))
}

/**
 * A collection of arguments for invoking getKafkaTopic.
 */
export interface GetKafkaTopicOutputArgs {
    topicId: pulumi.Input<string>;
}