# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union, overload
from . import _utilities

__all__ = [
    'GetKafkaCredentialResult',
    'AwaitableGetKafkaCredentialResult',
    'get_kafka_credential',
    'get_kafka_credential_output',
]

@pulumi.output_type
class GetKafkaCredentialResult:
    """
    A collection of values returned by getKafkaCredential.
    """
    def __init__(__self__, cluster_id=None, creation_time=None, credential_id=None, credential_name=None, id=None, password=None, permissions=None, state=None, topic=None, username=None):
        if cluster_id and not isinstance(cluster_id, str):
            raise TypeError("Expected argument 'cluster_id' to be a str")
        pulumi.set(__self__, "cluster_id", cluster_id)
        if creation_time and not isinstance(creation_time, int):
            raise TypeError("Expected argument 'creation_time' to be a int")
        pulumi.set(__self__, "creation_time", creation_time)
        if credential_id and not isinstance(credential_id, str):
            raise TypeError("Expected argument 'credential_id' to be a str")
        pulumi.set(__self__, "credential_id", credential_id)
        if credential_name and not isinstance(credential_name, str):
            raise TypeError("Expected argument 'credential_name' to be a str")
        pulumi.set(__self__, "credential_name", credential_name)
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        pulumi.set(__self__, "id", id)
        if password and not isinstance(password, str):
            raise TypeError("Expected argument 'password' to be a str")
        pulumi.set(__self__, "password", password)
        if permissions and not isinstance(permissions, str):
            raise TypeError("Expected argument 'permissions' to be a str")
        pulumi.set(__self__, "permissions", permissions)
        if state and not isinstance(state, str):
            raise TypeError("Expected argument 'state' to be a str")
        pulumi.set(__self__, "state", state)
        if topic and not isinstance(topic, str):
            raise TypeError("Expected argument 'topic' to be a str")
        pulumi.set(__self__, "topic", topic)
        if username and not isinstance(username, str):
            raise TypeError("Expected argument 'username' to be a str")
        pulumi.set(__self__, "username", username)

    @property
    @pulumi.getter(name="clusterId")
    def cluster_id(self) -> str:
        return pulumi.get(self, "cluster_id")

    @property
    @pulumi.getter(name="creationTime")
    def creation_time(self) -> int:
        return pulumi.get(self, "creation_time")

    @property
    @pulumi.getter(name="credentialId")
    def credential_id(self) -> str:
        return pulumi.get(self, "credential_id")

    @property
    @pulumi.getter(name="credentialName")
    def credential_name(self) -> str:
        return pulumi.get(self, "credential_name")

    @property
    @pulumi.getter
    def id(self) -> str:
        """
        The provider-assigned unique ID for this managed resource.
        """
        return pulumi.get(self, "id")

    @property
    @pulumi.getter
    def password(self) -> str:
        return pulumi.get(self, "password")

    @property
    @pulumi.getter
    def permissions(self) -> str:
        return pulumi.get(self, "permissions")

    @property
    @pulumi.getter
    def state(self) -> str:
        return pulumi.get(self, "state")

    @property
    @pulumi.getter
    def topic(self) -> str:
        return pulumi.get(self, "topic")

    @property
    @pulumi.getter
    def username(self) -> str:
        return pulumi.get(self, "username")


class AwaitableGetKafkaCredentialResult(GetKafkaCredentialResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetKafkaCredentialResult(
            cluster_id=self.cluster_id,
            creation_time=self.creation_time,
            credential_id=self.credential_id,
            credential_name=self.credential_name,
            id=self.id,
            password=self.password,
            permissions=self.permissions,
            state=self.state,
            topic=self.topic,
            username=self.username)


def get_kafka_credential(credential_id: Optional[str] = None,
                         opts: Optional[pulumi.InvokeOptions] = None) -> AwaitableGetKafkaCredentialResult:
    """
    ## Example Usage

    ```python
    import pulumi
    import pulumi_upstash as upstash

    kafka_credential_data = upstash.get_kafka_credential(credential_id=upstash_kafka_credential["exampleKafkaCredential"]["credential_id"])
    ```
    """
    __args__ = dict()
    __args__['credentialId'] = credential_id
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = _utilities.get_version()
        if opts.plugin_download_url is None:
            opts.plugin_download_url = _utilities.get_plugin_download_url()
    __ret__ = pulumi.runtime.invoke('upstash:index/getKafkaCredential:getKafkaCredential', __args__, opts=opts, typ=GetKafkaCredentialResult).value

    return AwaitableGetKafkaCredentialResult(
        cluster_id=__ret__.cluster_id,
        creation_time=__ret__.creation_time,
        credential_id=__ret__.credential_id,
        credential_name=__ret__.credential_name,
        id=__ret__.id,
        password=__ret__.password,
        permissions=__ret__.permissions,
        state=__ret__.state,
        topic=__ret__.topic,
        username=__ret__.username)


@_utilities.lift_output_func(get_kafka_credential)
def get_kafka_credential_output(credential_id: Optional[pulumi.Input[str]] = None,
                                opts: Optional[pulumi.InvokeOptions] = None) -> pulumi.Output[GetKafkaCredentialResult]:
    """
    ## Example Usage

    ```python
    import pulumi
    import pulumi_upstash as upstash

    kafka_credential_data = upstash.get_kafka_credential(credential_id=upstash_kafka_credential["exampleKafkaCredential"]["credential_id"])
    ```
    """
    ...