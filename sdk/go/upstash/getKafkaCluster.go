// Code generated by the Pulumi Terraform Bridge (tfgen) Tool DO NOT EDIT.
// *** WARNING: Do not edit by hand unless you're certain you know what you are doing! ***

package upstash

import (
	"context"
	"reflect"

	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
)

// ## Example Usage
//
// ```go
// package main
//
// import (
// 	"github.com/pulumi/pulumi-upstash/sdk/go/upstash"
// 	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
// 	"github.com/upstash/upstash-pulumi-provider/sdk/go/upstash"
// )
//
// func main() {
// 	pulumi.Run(func(ctx *pulumi.Context) error {
// 		_, err := upstash.LookupKafkaCluster(ctx, &GetKafkaClusterArgs{
// 			ClusterId: resource.Upstash_kafka_cluster.ExampleCluster.Cluster_id,
// 		}, nil)
// 		if err != nil {
// 			return err
// 		}
// 		return nil
// 	})
// }
// ```
func LookupKafkaCluster(ctx *pulumi.Context, args *LookupKafkaClusterArgs, opts ...pulumi.InvokeOption) (*LookupKafkaClusterResult, error) {
	opts = pkgInvokeDefaultOpts(opts)
	var rv LookupKafkaClusterResult
	err := ctx.Invoke("upstash:index/getKafkaCluster:getKafkaCluster", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

// A collection of arguments for invoking getKafkaCluster.
type LookupKafkaClusterArgs struct {
	ClusterId string `pulumi:"clusterId"`
}

// A collection of values returned by getKafkaCluster.
type LookupKafkaClusterResult struct {
	ClusterId    string `pulumi:"clusterId"`
	ClusterName  string `pulumi:"clusterName"`
	CreationTime int    `pulumi:"creationTime"`
	// The provider-assigned unique ID for this managed resource.
	Id                   string `pulumi:"id"`
	MaxMessageSize       int    `pulumi:"maxMessageSize"`
	MaxMessagesPerSecond int    `pulumi:"maxMessagesPerSecond"`
	MaxPartitions        int    `pulumi:"maxPartitions"`
	MaxRetentionSize     int    `pulumi:"maxRetentionSize"`
	MaxRetentionTime     int    `pulumi:"maxRetentionTime"`
	Multizone            bool   `pulumi:"multizone"`
	Password             string `pulumi:"password"`
	Region               string `pulumi:"region"`
	RestEndpoint         string `pulumi:"restEndpoint"`
	State                string `pulumi:"state"`
	TcpEndpoint          string `pulumi:"tcpEndpoint"`
	Type                 string `pulumi:"type"`
	Username             string `pulumi:"username"`
}

func LookupKafkaClusterOutput(ctx *pulumi.Context, args LookupKafkaClusterOutputArgs, opts ...pulumi.InvokeOption) LookupKafkaClusterResultOutput {
	return pulumi.ToOutputWithContext(context.Background(), args).
		ApplyT(func(v interface{}) (LookupKafkaClusterResult, error) {
			args := v.(LookupKafkaClusterArgs)
			r, err := LookupKafkaCluster(ctx, &args, opts...)
			var s LookupKafkaClusterResult
			if r != nil {
				s = *r
			}
			return s, err
		}).(LookupKafkaClusterResultOutput)
}

// A collection of arguments for invoking getKafkaCluster.
type LookupKafkaClusterOutputArgs struct {
	ClusterId pulumi.StringInput `pulumi:"clusterId"`
}

func (LookupKafkaClusterOutputArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*LookupKafkaClusterArgs)(nil)).Elem()
}

// A collection of values returned by getKafkaCluster.
type LookupKafkaClusterResultOutput struct{ *pulumi.OutputState }

func (LookupKafkaClusterResultOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*LookupKafkaClusterResult)(nil)).Elem()
}

func (o LookupKafkaClusterResultOutput) ToLookupKafkaClusterResultOutput() LookupKafkaClusterResultOutput {
	return o
}

func (o LookupKafkaClusterResultOutput) ToLookupKafkaClusterResultOutputWithContext(ctx context.Context) LookupKafkaClusterResultOutput {
	return o
}

func (o LookupKafkaClusterResultOutput) ClusterId() pulumi.StringOutput {
	return o.ApplyT(func(v LookupKafkaClusterResult) string { return v.ClusterId }).(pulumi.StringOutput)
}

func (o LookupKafkaClusterResultOutput) ClusterName() pulumi.StringOutput {
	return o.ApplyT(func(v LookupKafkaClusterResult) string { return v.ClusterName }).(pulumi.StringOutput)
}

func (o LookupKafkaClusterResultOutput) CreationTime() pulumi.IntOutput {
	return o.ApplyT(func(v LookupKafkaClusterResult) int { return v.CreationTime }).(pulumi.IntOutput)
}

// The provider-assigned unique ID for this managed resource.
func (o LookupKafkaClusterResultOutput) Id() pulumi.StringOutput {
	return o.ApplyT(func(v LookupKafkaClusterResult) string { return v.Id }).(pulumi.StringOutput)
}

func (o LookupKafkaClusterResultOutput) MaxMessageSize() pulumi.IntOutput {
	return o.ApplyT(func(v LookupKafkaClusterResult) int { return v.MaxMessageSize }).(pulumi.IntOutput)
}

func (o LookupKafkaClusterResultOutput) MaxMessagesPerSecond() pulumi.IntOutput {
	return o.ApplyT(func(v LookupKafkaClusterResult) int { return v.MaxMessagesPerSecond }).(pulumi.IntOutput)
}

func (o LookupKafkaClusterResultOutput) MaxPartitions() pulumi.IntOutput {
	return o.ApplyT(func(v LookupKafkaClusterResult) int { return v.MaxPartitions }).(pulumi.IntOutput)
}

func (o LookupKafkaClusterResultOutput) MaxRetentionSize() pulumi.IntOutput {
	return o.ApplyT(func(v LookupKafkaClusterResult) int { return v.MaxRetentionSize }).(pulumi.IntOutput)
}

func (o LookupKafkaClusterResultOutput) MaxRetentionTime() pulumi.IntOutput {
	return o.ApplyT(func(v LookupKafkaClusterResult) int { return v.MaxRetentionTime }).(pulumi.IntOutput)
}

func (o LookupKafkaClusterResultOutput) Multizone() pulumi.BoolOutput {
	return o.ApplyT(func(v LookupKafkaClusterResult) bool { return v.Multizone }).(pulumi.BoolOutput)
}

func (o LookupKafkaClusterResultOutput) Password() pulumi.StringOutput {
	return o.ApplyT(func(v LookupKafkaClusterResult) string { return v.Password }).(pulumi.StringOutput)
}

func (o LookupKafkaClusterResultOutput) Region() pulumi.StringOutput {
	return o.ApplyT(func(v LookupKafkaClusterResult) string { return v.Region }).(pulumi.StringOutput)
}

func (o LookupKafkaClusterResultOutput) RestEndpoint() pulumi.StringOutput {
	return o.ApplyT(func(v LookupKafkaClusterResult) string { return v.RestEndpoint }).(pulumi.StringOutput)
}

func (o LookupKafkaClusterResultOutput) State() pulumi.StringOutput {
	return o.ApplyT(func(v LookupKafkaClusterResult) string { return v.State }).(pulumi.StringOutput)
}

func (o LookupKafkaClusterResultOutput) TcpEndpoint() pulumi.StringOutput {
	return o.ApplyT(func(v LookupKafkaClusterResult) string { return v.TcpEndpoint }).(pulumi.StringOutput)
}

func (o LookupKafkaClusterResultOutput) Type() pulumi.StringOutput {
	return o.ApplyT(func(v LookupKafkaClusterResult) string { return v.Type }).(pulumi.StringOutput)
}

func (o LookupKafkaClusterResultOutput) Username() pulumi.StringOutput {
	return o.ApplyT(func(v LookupKafkaClusterResult) string { return v.Username }).(pulumi.StringOutput)
}

func init() {
	pulumi.RegisterOutputType(LookupKafkaClusterResultOutput{})
}