package org.sagebionetworks.challenge.service;

import java.util.List;
import lombok.extern.slf4j.Slf4j;
import org.sagebionetworks.challenge.model.dto.ChallengeInputDataTypeDto;
import org.sagebionetworks.challenge.model.dto.ChallengeInputDataTypesPageDto;
import org.sagebionetworks.challenge.model.entity.ChallengeInputDataTypeEntity;
import org.sagebionetworks.challenge.model.mapper.ChallengeInputDataTypeMapper;
import org.sagebionetworks.challenge.model.repository.ChallengeInputDataTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Slf4j
@Service
public class ChallengeInputDataTypeService {

  @Autowired private ChallengeInputDataTypeRepository challengeInputDataTypeRepository;

  private ChallengeInputDataTypeMapper challengeInputDataTypeMapper =
      new ChallengeInputDataTypeMapper();

  @Transactional(readOnly = true)
  public ChallengeInputDataTypesPageDto listChallengeInputDataTypes(
      Integer pageNumber, Integer pageSize) {
    Pageable pageable = PageRequest.of(pageNumber, pageSize);
    Page<ChallengeInputDataTypeEntity> entitiesPage =
        challengeInputDataTypeRepository.findAll(pageable);

    List<ChallengeInputDataTypeDto> challengeInputDataTypes =
        challengeInputDataTypeMapper.convertToDtoList(entitiesPage.getContent());

    return ChallengeInputDataTypesPageDto.builder()
        .challengeInputDataTypes(challengeInputDataTypes)
        .number(entitiesPage.getNumber())
        .size(entitiesPage.getSize())
        .totalElements(entitiesPage.getTotalElements())
        .totalPages(entitiesPage.getTotalPages())
        .hasNext(entitiesPage.hasNext())
        .hasPrevious(entitiesPage.hasPrevious())
        .build();
  }
}
