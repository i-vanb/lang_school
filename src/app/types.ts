export type CourseT = {
  id?: string;
  title: string;
  tags?: string;
  description?: string;
  price?: number;
  discount?: number;
  premiumPrice?: number;
  heroImage?: string | null;
  bannerImage?: string | null;
  isActive?: boolean;
  currency?: number;
}