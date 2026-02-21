export interface AvatarUser {
  name: string;
  image?: string;
}

export interface AvatarGroupProps {
  users?: AvatarUser[];
  max?: number;
  size?: number;
  className?: string;
}
