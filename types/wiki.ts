export interface ProfileSummary {
  id: number;
  code: string;
  image: string;
  city: string;
  nationality: string;
  job: string;
  updatedAt: string;
  name: string;
}

export interface ProfileDetail extends ProfileSummary {
  mbti: string;
  sns: string;
  birthday: string;
  nickname: string;
  bloodType: string;
  family: string;
  content: string;
  securityQuestion: string;
  securityAnswer: string;
  teamId: string;
  isMyProfile?: boolean;
}

export interface ProfileEditStatus {
  registeredAt: string;
  userId: number;
}
export interface Section {
  title: string;
  content: string;
}
