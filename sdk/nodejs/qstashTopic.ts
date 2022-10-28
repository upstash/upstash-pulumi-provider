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
 * const exampleQstashTopic = new upstash.QStashTopic("exampleQstashTopic", {});
 * ```
 */
export class QStashTopic extends pulumi.CustomResource {
    /**
     * Get an existing QStashTopic resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: QStashTopicState, opts?: pulumi.CustomResourceOptions): QStashTopic {
        return new QStashTopic(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'upstash:index/qStashTopic:QStashTopic';

    /**
     * Returns true if the given object is an instance of QStashTopic.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is QStashTopic {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === QStashTopic.__pulumiType;
    }

    /**
     * Endpoints for the Qstash Topic
     */
    public /*out*/ readonly endpoints!: pulumi.Output<{[key: string]: string}[]>;
    /**
     * Name of the Qstash Topic
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Unique Qstash Topic ID for requested topic
     */
    public /*out*/ readonly topicId!: pulumi.Output<string>;

    /**
     * Create a QStashTopic resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: QStashTopicArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: QStashTopicArgs | QStashTopicState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as QStashTopicState | undefined;
            resourceInputs["endpoints"] = state ? state.endpoints : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["topicId"] = state ? state.topicId : undefined;
        } else {
            const args = argsOrState as QStashTopicArgs | undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["endpoints"] = undefined /*out*/;
            resourceInputs["topicId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(QStashTopic.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering QStashTopic resources.
 */
export interface QStashTopicState {
    /**
     * Endpoints for the Qstash Topic
     */
    endpoints?: pulumi.Input<pulumi.Input<{[key: string]: pulumi.Input<string>}>[]>;
    /**
     * Name of the Qstash Topic
     */
    name?: pulumi.Input<string>;
    /**
     * Unique Qstash Topic ID for requested topic
     */
    topicId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a QStashTopic resource.
 */
export interface QStashTopicArgs {
    /**
     * Name of the Qstash Topic
     */
    name?: pulumi.Input<string>;
}