// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class QStashSchedule extends pulumi.CustomResource {
    /**
     * Get an existing QStashSchedule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: QStashScheduleState, opts?: pulumi.CustomResourceOptions): QStashSchedule {
        return new QStashSchedule(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'upstash:index/qStashSchedule:QStashSchedule';

    /**
     * Returns true if the given object is an instance of QStashSchedule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is QStashSchedule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === QStashSchedule.__pulumiType;
    }

    /**
     * Body to send for the POST request in string format. Needs escaping (\) double quotes.
     */
    public readonly body!: pulumi.Output<string | undefined>;
    /**
     * Content Based Deduplication (bool) for Qstash Scheduling.
     */
    public readonly contentBasedDeduplication!: pulumi.Output<boolean | undefined>;
    /**
     * Content type for Qstash Scheduling.
     */
    public readonly contentType!: pulumi.Output<string | undefined>;
    /**
     * Creation time for Qstash Schedule.
     */
    public /*out*/ readonly createdAt!: pulumi.Output<number>;
    /**
     * Cron string for Qstash Schedule
     */
    public readonly cron!: pulumi.Output<string>;
    /**
     * Deduplication ID for Qstash Scheduling.
     */
    public readonly deduplicationId!: pulumi.Output<string | undefined>;
    /**
     * Delay for Qstash Schedule.
     */
    public readonly delay!: pulumi.Output<string | undefined>;
    /**
     * Destination for Qstash Schedule. Either Topic ID or valid URL
     */
    public readonly destination!: pulumi.Output<string>;
    /**
     * Forward headers to your API
     */
    public readonly forwardHeaders!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Start time for Qstash Scheduling.
     */
    public readonly notBefore!: pulumi.Output<number | undefined>;
    /**
     * Retries for Qstash Schedule requests.
     */
    public readonly retries!: pulumi.Output<number | undefined>;
    /**
     * Unique Qstash Schedule ID for requested schedule
     */
    public /*out*/ readonly scheduleId!: pulumi.Output<string>;

    /**
     * Create a QStashSchedule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: QStashScheduleArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: QStashScheduleArgs | QStashScheduleState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as QStashScheduleState | undefined;
            resourceInputs["body"] = state ? state.body : undefined;
            resourceInputs["contentBasedDeduplication"] = state ? state.contentBasedDeduplication : undefined;
            resourceInputs["contentType"] = state ? state.contentType : undefined;
            resourceInputs["createdAt"] = state ? state.createdAt : undefined;
            resourceInputs["cron"] = state ? state.cron : undefined;
            resourceInputs["deduplicationId"] = state ? state.deduplicationId : undefined;
            resourceInputs["delay"] = state ? state.delay : undefined;
            resourceInputs["destination"] = state ? state.destination : undefined;
            resourceInputs["forwardHeaders"] = state ? state.forwardHeaders : undefined;
            resourceInputs["notBefore"] = state ? state.notBefore : undefined;
            resourceInputs["retries"] = state ? state.retries : undefined;
            resourceInputs["scheduleId"] = state ? state.scheduleId : undefined;
        } else {
            const args = argsOrState as QStashScheduleArgs | undefined;
            if ((!args || args.cron === undefined) && !opts.urn) {
                throw new Error("Missing required property 'cron'");
            }
            if ((!args || args.destination === undefined) && !opts.urn) {
                throw new Error("Missing required property 'destination'");
            }
            resourceInputs["body"] = args ? args.body : undefined;
            resourceInputs["contentBasedDeduplication"] = args ? args.contentBasedDeduplication : undefined;
            resourceInputs["contentType"] = args ? args.contentType : undefined;
            resourceInputs["cron"] = args ? args.cron : undefined;
            resourceInputs["deduplicationId"] = args ? args.deduplicationId : undefined;
            resourceInputs["delay"] = args ? args.delay : undefined;
            resourceInputs["destination"] = args ? args.destination : undefined;
            resourceInputs["forwardHeaders"] = args ? args.forwardHeaders : undefined;
            resourceInputs["notBefore"] = args ? args.notBefore : undefined;
            resourceInputs["retries"] = args ? args.retries : undefined;
            resourceInputs["createdAt"] = undefined /*out*/;
            resourceInputs["scheduleId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(QStashSchedule.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering QStashSchedule resources.
 */
export interface QStashScheduleState {
    /**
     * Body to send for the POST request in string format. Needs escaping (\) double quotes.
     */
    body?: pulumi.Input<string>;
    /**
     * Content Based Deduplication (bool) for Qstash Scheduling.
     */
    contentBasedDeduplication?: pulumi.Input<boolean>;
    /**
     * Content type for Qstash Scheduling.
     */
    contentType?: pulumi.Input<string>;
    /**
     * Creation time for Qstash Schedule.
     */
    createdAt?: pulumi.Input<number>;
    /**
     * Cron string for Qstash Schedule
     */
    cron?: pulumi.Input<string>;
    /**
     * Deduplication ID for Qstash Scheduling.
     */
    deduplicationId?: pulumi.Input<string>;
    /**
     * Delay for Qstash Schedule.
     */
    delay?: pulumi.Input<string>;
    /**
     * Destination for Qstash Schedule. Either Topic ID or valid URL
     */
    destination?: pulumi.Input<string>;
    /**
     * Forward headers to your API
     */
    forwardHeaders?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Start time for Qstash Scheduling.
     */
    notBefore?: pulumi.Input<number>;
    /**
     * Retries for Qstash Schedule requests.
     */
    retries?: pulumi.Input<number>;
    /**
     * Unique Qstash Schedule ID for requested schedule
     */
    scheduleId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a QStashSchedule resource.
 */
export interface QStashScheduleArgs {
    /**
     * Body to send for the POST request in string format. Needs escaping (\) double quotes.
     */
    body?: pulumi.Input<string>;
    /**
     * Content Based Deduplication (bool) for Qstash Scheduling.
     */
    contentBasedDeduplication?: pulumi.Input<boolean>;
    /**
     * Content type for Qstash Scheduling.
     */
    contentType?: pulumi.Input<string>;
    /**
     * Cron string for Qstash Schedule
     */
    cron: pulumi.Input<string>;
    /**
     * Deduplication ID for Qstash Scheduling.
     */
    deduplicationId?: pulumi.Input<string>;
    /**
     * Delay for Qstash Schedule.
     */
    delay?: pulumi.Input<string>;
    /**
     * Destination for Qstash Schedule. Either Topic ID or valid URL
     */
    destination: pulumi.Input<string>;
    /**
     * Forward headers to your API
     */
    forwardHeaders?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Start time for Qstash Scheduling.
     */
    notBefore?: pulumi.Input<number>;
    /**
     * Retries for Qstash Schedule requests.
     */
    retries?: pulumi.Input<number>;
}
