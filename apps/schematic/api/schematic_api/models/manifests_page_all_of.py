# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from schematic_api.models.base_model_ import Model
from schematic_api import util


class ManifestsPageAllOf(Model):
    """NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).

    Do not edit the class manually.
    """

    def __init__(self, manifests=None):  # noqa: E501
        """ManifestsPageAllOf - a model defined in OpenAPI

        :param manifests: The manifests of this ManifestsPageAllOf.  # noqa: E501
        :type manifests: List[str]
        """
        self.openapi_types = {
            'manifests': List[str]
        }

        self.attribute_map = {
            'manifests': 'manifests'
        }

        self._manifests = manifests

    @classmethod
    def from_dict(cls, dikt) -> 'ManifestsPageAllOf':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The ManifestsPage_allOf of this ManifestsPageAllOf.  # noqa: E501
        :rtype: ManifestsPageAllOf
        """
        return util.deserialize_model(dikt, cls)

    @property
    def manifests(self):
        """Gets the manifests of this ManifestsPageAllOf.

        A list of manifests.  # noqa: E501

        :return: The manifests of this ManifestsPageAllOf.
        :rtype: List[str]
        """
        return self._manifests

    @manifests.setter
    def manifests(self, manifests):
        """Sets the manifests of this ManifestsPageAllOf.

        A list of manifests.  # noqa: E501

        :param manifests: The manifests of this ManifestsPageAllOf.
        :type manifests: List[str]
        """
        if manifests is None:
            raise ValueError("Invalid value for `manifests`, must not be `None`")  # noqa: E501

        self._manifests = manifests