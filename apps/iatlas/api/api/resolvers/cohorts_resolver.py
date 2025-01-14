from .resolver_helpers import (
    build_cohort_graphql_response,
    build_cohort_request,
    cohort_request_fields,
    get_requested,
    get_selection_set,
    simple_data_set_request_fields,
    simple_tag_request_fields,
    cohort_sample_request_fields,
    simple_feature_request_fields,
    simple_gene_request_fields,
    mutation_request_fields,
)
from .resolver_helpers.paging_utils import paginate, Paging, paging_fields


def resolve_cohorts(
    _obj, info, distinct=False, paging=None, cohort=None, dataSet=None, tag=None
):

    selection_set = get_selection_set(info=info, child_node="items")

    requested = get_requested(
        selection_set=selection_set, requested_field_mapping=cohort_request_fields
    )

    data_set_requested = get_requested(
        selection_set=selection_set,
        requested_field_mapping=simple_data_set_request_fields,
        child_node="dataSet",
    )

    tag_requested = get_requested(
        selection_set=selection_set,
        requested_field_mapping=simple_tag_request_fields,
        child_node="tag",
    )

    sample_selection_set = get_selection_set(
        selection_set=selection_set, child_node="samples"
    )

    sample_requested = get_requested(
        selection_set=sample_selection_set,
        requested_field_mapping=cohort_sample_request_fields,
    )

    sample_tag_selection_set = get_selection_set(
        selection_set=sample_selection_set, child_node="tag"
    )

    sample_tag_requested = get_requested(
        selection_set=sample_tag_selection_set,
        requested_field_mapping=simple_tag_request_fields,
    )

    feature_selection_set = get_selection_set(
        selection_set=selection_set, child_node="features"
    )

    feature_requested = get_requested(
        selection_set=feature_selection_set,
        requested_field_mapping=simple_feature_request_fields,
    )

    gene_selection_set = get_selection_set(
        selection_set=selection_set, child_node="genes"
    )

    gene_requested = get_requested(
        selection_set=gene_selection_set,
        requested_field_mapping=simple_gene_request_fields,
    )

    mutation_selection_set = get_selection_set(
        selection_set=selection_set, child_node="mutations"
    )

    mutation_requested = get_requested(
        selection_set=mutation_selection_set,
        requested_field_mapping=mutation_request_fields,
    )

    mutation_gene_selection_set = get_selection_set(
        selection_set=mutation_selection_set, child_node="gene"
    )

    mutation_gene_requested = get_requested(
        selection_set=mutation_gene_selection_set,
        requested_field_mapping=simple_gene_request_fields,
    )

    paging = paging if paging else Paging.DEFAULT

    query, count_query = build_cohort_request(
        requested,
        data_set_requested,
        tag_requested,
        distinct=distinct,
        paging=paging,
        cohort=cohort,
        data_set=dataSet,
        tag=tag,
    )

    pagination_requested = get_requested(info, paging_fields, "paging")

    response_function = build_cohort_graphql_response(
        requested=requested,
        sample_requested=sample_requested,
        sample_tag_requested=sample_tag_requested,
        feature_requested=feature_requested,
        gene_requested=gene_requested,
        mutation_requested=mutation_requested,
        mutation_gene_requested=mutation_gene_requested,
    )

    res = paginate(
        query, count_query, paging, distinct, response_function, pagination_requested
    )

    return res
