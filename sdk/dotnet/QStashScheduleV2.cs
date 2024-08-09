// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Upstash
{
    [UpstashResourceType("upstash:index/qStashScheduleV2:QStashScheduleV2")]
    public partial class QStashScheduleV2 : Pulumi.CustomResource
    {
        /// <summary>
        /// Body to send for the POST request in string format. Needs escaping (\) double quotes.
        /// </summary>
        [Output("body")]
        public Output<string?> Body { get; private set; } = null!;

        /// <summary>
        /// Callback URL for Qstash Schedule.
        /// </summary>
        [Output("callback")]
        public Output<string?> Callback { get; private set; } = null!;

        /// <summary>
        /// Content type for Qstash Scheduling.
        /// </summary>
        [Output("contentType")]
        public Output<string?> ContentType { get; private set; } = null!;

        /// <summary>
        /// Creation time for Qstash Schedule.
        /// </summary>
        [Output("createdAt")]
        public Output<int> CreatedAt { get; private set; } = null!;

        /// <summary>
        /// Cron string for Qstash Schedule
        /// </summary>
        [Output("cron")]
        public Output<string> Cron { get; private set; } = null!;

        /// <summary>
        /// Delay for Qstash Schedule. Delay should be given in seconds
        /// </summary>
        [Output("delay")]
        public Output<string?> Delay { get; private set; } = null!;

        /// <summary>
        /// Destination for Qstash Schedule. Either Topic Name or valid URL
        /// </summary>
        [Output("destination")]
        public Output<string> Destination { get; private set; } = null!;

        /// <summary>
        /// Forward headers to your API
        /// </summary>
        [Output("forwardHeaders")]
        public Output<ImmutableDictionary<string, string>?> ForwardHeaders { get; private set; } = null!;

        /// <summary>
        /// Headers for the QStash schedule
        /// </summary>
        [Output("header")]
        public Output<string> Header { get; private set; } = null!;

        /// <summary>
        /// Method of Http Request on QStash
        /// </summary>
        [Output("method")]
        public Output<string?> Method { get; private set; } = null!;

        /// <summary>
        /// Retries for Qstash Schedule requests.
        /// </summary>
        [Output("retries")]
        public Output<int?> Retries { get; private set; } = null!;

        /// <summary>
        /// Unique Qstash Schedule ID for requested schedule
        /// </summary>
        [Output("scheduleId")]
        public Output<string> ScheduleId { get; private set; } = null!;


        /// <summary>
        /// Create a QStashScheduleV2 resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public QStashScheduleV2(string name, QStashScheduleV2Args args, CustomResourceOptions? options = null)
            : base("upstash:index/qStashScheduleV2:QStashScheduleV2", name, args ?? new QStashScheduleV2Args(), MakeResourceOptions(options, ""))
        {
        }

        private QStashScheduleV2(string name, Input<string> id, QStashScheduleV2State? state = null, CustomResourceOptions? options = null)
            : base("upstash:index/qStashScheduleV2:QStashScheduleV2", name, state, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                PluginDownloadURL = "github://api.github.com/upstash/pulumi-upstash",
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing QStashScheduleV2 resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="state">Any extra arguments used during the lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static QStashScheduleV2 Get(string name, Input<string> id, QStashScheduleV2State? state = null, CustomResourceOptions? options = null)
        {
            return new QStashScheduleV2(name, id, state, options);
        }
    }

    public sealed class QStashScheduleV2Args : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Body to send for the POST request in string format. Needs escaping (\) double quotes.
        /// </summary>
        [Input("body")]
        public Input<string>? Body { get; set; }

        /// <summary>
        /// Callback URL for Qstash Schedule.
        /// </summary>
        [Input("callback")]
        public Input<string>? Callback { get; set; }

        /// <summary>
        /// Content type for Qstash Scheduling.
        /// </summary>
        [Input("contentType")]
        public Input<string>? ContentType { get; set; }

        /// <summary>
        /// Cron string for Qstash Schedule
        /// </summary>
        [Input("cron", required: true)]
        public Input<string> Cron { get; set; } = null!;

        /// <summary>
        /// Delay for Qstash Schedule. Delay should be given in seconds
        /// </summary>
        [Input("delay")]
        public Input<string>? Delay { get; set; }

        /// <summary>
        /// Destination for Qstash Schedule. Either Topic Name or valid URL
        /// </summary>
        [Input("destination", required: true)]
        public Input<string> Destination { get; set; } = null!;

        [Input("forwardHeaders")]
        private InputMap<string>? _forwardHeaders;

        /// <summary>
        /// Forward headers to your API
        /// </summary>
        public InputMap<string> ForwardHeaders
        {
            get => _forwardHeaders ?? (_forwardHeaders = new InputMap<string>());
            set => _forwardHeaders = value;
        }

        /// <summary>
        /// Method of Http Request on QStash
        /// </summary>
        [Input("method")]
        public Input<string>? Method { get; set; }

        /// <summary>
        /// Retries for Qstash Schedule requests.
        /// </summary>
        [Input("retries")]
        public Input<int>? Retries { get; set; }

        public QStashScheduleV2Args()
        {
        }
    }

    public sealed class QStashScheduleV2State : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Body to send for the POST request in string format. Needs escaping (\) double quotes.
        /// </summary>
        [Input("body")]
        public Input<string>? Body { get; set; }

        /// <summary>
        /// Callback URL for Qstash Schedule.
        /// </summary>
        [Input("callback")]
        public Input<string>? Callback { get; set; }

        /// <summary>
        /// Content type for Qstash Scheduling.
        /// </summary>
        [Input("contentType")]
        public Input<string>? ContentType { get; set; }

        /// <summary>
        /// Creation time for Qstash Schedule.
        /// </summary>
        [Input("createdAt")]
        public Input<int>? CreatedAt { get; set; }

        /// <summary>
        /// Cron string for Qstash Schedule
        /// </summary>
        [Input("cron")]
        public Input<string>? Cron { get; set; }

        /// <summary>
        /// Delay for Qstash Schedule. Delay should be given in seconds
        /// </summary>
        [Input("delay")]
        public Input<string>? Delay { get; set; }

        /// <summary>
        /// Destination for Qstash Schedule. Either Topic Name or valid URL
        /// </summary>
        [Input("destination")]
        public Input<string>? Destination { get; set; }

        [Input("forwardHeaders")]
        private InputMap<string>? _forwardHeaders;

        /// <summary>
        /// Forward headers to your API
        /// </summary>
        public InputMap<string> ForwardHeaders
        {
            get => _forwardHeaders ?? (_forwardHeaders = new InputMap<string>());
            set => _forwardHeaders = value;
        }

        /// <summary>
        /// Headers for the QStash schedule
        /// </summary>
        [Input("header")]
        public Input<string>? Header { get; set; }

        /// <summary>
        /// Method of Http Request on QStash
        /// </summary>
        [Input("method")]
        public Input<string>? Method { get; set; }

        /// <summary>
        /// Retries for Qstash Schedule requests.
        /// </summary>
        [Input("retries")]
        public Input<int>? Retries { get; set; }

        /// <summary>
        /// Unique Qstash Schedule ID for requested schedule
        /// </summary>
        [Input("scheduleId")]
        public Input<string>? ScheduleId { get; set; }

        public QStashScheduleV2State()
        {
        }
    }
}