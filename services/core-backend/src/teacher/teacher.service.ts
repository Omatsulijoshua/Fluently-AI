import { Injectable } from '@nestjs/common';

export interface CreateClassroomDto {
  teacherId: string;
  name: string;
  targetLanguage: string;
}

export interface CreateAssignmentDto {
  classroomId: string;
  title: string;
  prompt: string;
  dueDate: string;
}

@Injectable()
export class TeacherService {
  async createClassroom(dto: CreateClassroomDto) {
    const code = `CLS_${Math.random().toString(36).substring(2, 6).toUpperCase()}`;
    return {
      classroomId: `cls_${Math.random().toString(36).substring(7)}`,
      teacherId: dto.teacherId,
      name: dto.name,
      targetLanguage: dto.targetLanguage,
      code,
      studentCount: 0,
      createdAt: new Date().toISOString(),
    };
  }

  async generateAiAssignment(dto: CreateAssignmentDto) {
    return {
      assignmentId: `asg_${Math.random().toString(36).substring(7)}`,
      classroomId: dto.classroomId,
      title: dto.title,
      prompt: dto.prompt,
      dueDate: dto.dueDate,
      aiRubric: {
        pronunciationWeight: 0.4,
        grammarWeight: 0.3,
        vocabularyWeight: 0.3,
      },
    };
  }

  async evaluateStudentSubmission(submissionId: string) {
    return {
      submissionId,
      status: 'EVALUATED_BY_AI',
      pronunciationScore: 94.0,
      grammarScore: 88.0,
      overallGradeScore: 91.0,
      aiFeedback: 'Excellent acoustic clarity. Minor slip on verb conjugation in sentence 3.',
    };
  }
}
