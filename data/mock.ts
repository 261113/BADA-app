export type Category = {
  id: string;
  label: string;
  icon: string;
};

export const categories: Category[] = [
  { id: 'art', label: '미술', icon: 'color-palette' },
  { id: 'music', label: '음악', icon: 'musical-notes' },
  { id: 'dance', label: '무용', icon: 'body' },
  { id: 'theater', label: '연극', icon: 'megaphone' },
  { id: 'literature', label: '문학', icon: 'book' },
  { id: 'film', label: '영화', icon: 'film' },
  { id: 'photo', label: '사진', icon: 'camera' },
  { id: 'craft', label: '공예', icon: 'hammer' },
  { id: 'design', label: '디자인', icon: 'shapes' },
  { id: 'gukak', label: '국악', icon: 'disc' },
  { id: 'webtoon', label: '만화', icon: 'brush' },
  { id: 'etc', label: '기타', icon: 'ellipsis-horizontal-circle' },
];

export type InfoItem = {
  id: string;
  type: '정보' | '오디션' | '학원';
  categoryId: string;
  title: string;
  place: string;
  period: string;
};

export const infoItems: InfoItem[] = [
  { id: 'i1', type: '오디션', categoryId: 'music', title: '2026 청년 음악가 오디션', place: '서울 예술의전당', period: '2026.10.01 - 2026.10.15' },
  { id: 'i2', type: '학원', categoryId: 'art', title: '바다 미술 아카데미', place: '서울 마포구', period: '상시 모집' },
  { id: 'i3', type: '정보', categoryId: 'dance', title: '2026 신진 무용가 지원사업 안내', place: '문화체육관광부', period: '2026.09.20 - 2026.11.01' },
  { id: 'i4', type: '오디션', categoryId: 'theater', title: '소극장 연극배우 공개 오디션', place: '대학로 소극장', period: '2026.10.05' },
  { id: 'i5', type: '학원', categoryId: 'film', title: '단편영화 제작 워크숍', place: '서울 영상위원회', period: '2026.11.02 - 2026.12.10' },
];

export const infoTypes: InfoItem['type'][] = ['정보', '오디션', '학원'];

export type Post = {
  id: string;
  board: '예술거래' | '문화메이트';
  title: string;
  content: string;
  author: string;
  period: string;
  createdAt: string;
};

export const posts: Post[] = [
  {
    id: 'p1',
    board: '예술거래',
    title: '유화 붓 세트 나눔합니다',
    content: '작업실 정리 중이라 거의 새것인 유화 붓 세트 나눔합니다. 관심 있으신 분 채팅 주세요.',
    author: '물감고래',
    period: '2026.09.21 - 2026.09.28',
    createdAt: '3시간 전',
  },
  {
    id: 'p2',
    board: '문화메이트',
    title: '이번 주말 전시 같이 보러 가실 분',
    content: '국립현대미술관 전시 같이 관람하고 이야기 나눌 문화메이트 구합니다.',
    author: '전시러버',
    period: '2026.09.21 - 2026.09.27',
    createdAt: '5시간 전',
  },
  {
    id: 'p3',
    board: '예술거래',
    title: '공연 티켓 양도합니다',
    content: '사정상 못 가게 된 소극장 공연 티켓 1매 양도합니다.',
    author: '무대뒤편',
    period: '2026.09.22까지',
    createdAt: '어제',
  },
  {
    id: 'p4',
    board: '문화메이트',
    title: '실내악 합주 같이 하실 분',
    content: '월 2회 정기 모임으로 실내악 합주하실 분 모집합니다. 초심자 환영해요.',
    author: '첼로소년',
    period: '상시 모집',
    createdAt: '2일 전',
  },
];

export const boardTypes: Post['board'][] = ['예술거래', '문화메이트'];

export const mapPlaces = [
  { id: 'm1', name: '바다 갤러리', categoryId: 'art', premium: true },
  { id: 'm2', name: '한빛 연습실', categoryId: 'music', premium: false },
  { id: 'm3', name: '소울 무용학원', categoryId: 'dance', premium: true },
  { id: 'm4', name: '대학로 열린극장', categoryId: 'theater', premium: false },
];
