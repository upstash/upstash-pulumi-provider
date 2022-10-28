// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

/**
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as pulumi from "@upstash/pulumi";
 *
 * const exampleQstashEndpoint = new upstash.QStashEndpoint("exampleQstashEndpoint", {
 *     url: "https://***.***",
 *     topicId: resource.upstash_qstash_topic.exampleQstashTopic.topic_id,
 * });
 * ```
 */
export class QStashEndpoint extends pulumi.CustomResource {
    /**
     * Get an existing QStashEndpoint resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: QStashEndpointState, opts?: pulumi.CustomResourceOptions): QStashEndpoint {
        return new QStashEndpoint(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'upstash:index/qStashEndpoint:QStashEndpoint';

    /**
     * Returns true if the given object is an instance of QStashEndpoint.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is QStashEndpoint {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === QStashEndpoint.__pulumiType;
    }

    /**
     * Unique Qstash Endpoint ID
     */
    public /*out*/ readonly endpointId!: pulumi.Output<string>;
    /**
     * Topic Id that the endpoint is added to
     */
    public readonly topicId!: pulumi.Output<string>;
    /**
     * Unique Qstash Topic Name for Endpoint
     */
    public /*out*/ readonly topicName!: pulumi.Output<string>;
    /**
     * URL of the endpoint
     */
    public readonly url!: pulumi.Output<string>;

    /**
     * Create a QStashEndpoint resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: QStashEndpointArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: QStashEndpointArgs | QStashEndpointState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as QStashEndpointState | undefined;
            resourceInputs["endpointId"] = state ? state.endpointId : undefined;
            resourceInputs["topicId"] = state ? state.topicId : undefined;
            resourceInputs["topicName"] = state ? state.topicName : undefined;
            resourceInputs["url"] = state ? state.url : undefined;
        } else {
            const args = argsOrState as QStashEndpointArgs | undefined;
            if ((!args || args.topicId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'topicId'");
            }
            if ((!args || args.url === undefined) && !opts.urn) {
                throw new Error("Missing required property 'url'");
            }
            resourceInputs["topicId"] = args ? args.topicId : undefined;
            resourceInputs["url"] = args ? args.url : undefined;
            resourceInputs["endpointId"] = undefined /*out*/;
            resourceInputs["topicName"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(QStashEndpoint.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering QStashEndpoint resources.
 */
export interface QStashEndpointState {
    /**
     * Unique Qstash Endpoint ID
     */
    endpointId?: pulumi.Input<string>;
    /**
     * Topic Id that the endpoint is added to
     */
    topicId?: pulumi.Input<string>;
    /**
     * Unique Qstash Topic Name for Endpoint
     */
    topicName?: pulumi.Input<string>;
    /**
     * URL of the endpoint
     */
    url?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a QStashEndpoint resource.
 */
export interface QStashEndpointArgs {
    /**
     * Topic Id that the endpoint is added to
     */
    topicId: pulumi.Input<string>;
    /**
     * URL of the endpoint
     */
    url: pulumi.Input<string>;
}