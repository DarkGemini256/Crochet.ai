// Shared types for Crochet.ai

export type SkillLevel = 'beginner' | 'intermediate' | 'advanced';

export type ProjectStatus = 'not_started' | 'in_progress' | 'completed' | 'paused';

export type PatternCategory = 'amigurumi' | 'garments' | 'accessories' | 'home-decor';

export type TutorialCategory = 'stitches' | 'techniques' | 'tips-tricks';

export type SubscriptionPlan = 'free' | 'basic' | 'premium';

export type SubscriptionStatus = 'active' | 'canceled' | 'past_due';

export type NotificationType = 'comment' | 'like' | 'project_update' | 'new_pattern';

// API Response types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Pattern generation request
export interface PatternGenerationRequest {
  description: string;
  difficulty: SkillLevel;
  category: PatternCategory;
  materials?: string[];
}

// Pattern generation response (placeholder)
export interface PatternGenerationResponse {
  title: string;
  description: string;
  instructions: string;
  materials: string[];
  hookSize?: string;
  gaugeInfo?: string;
  estimatedTime?: string;
  imageUrl?: string;
}

// Image preview request (placeholder)
export interface ImagePreviewRequest {
  patternId: string;
  style?: string;
}

// User profile update
export interface UserProfileUpdate {
  name?: string;
  bio?: string;
  skillLevel?: SkillLevel;
  image?: string;
}

// Onboarding data
export interface OnboardingData {
  name: string;
  skillLevel: SkillLevel;
  interests: PatternCategory[];
}

// Project creation
export interface ProjectCreateData {
  title: string;
  description?: string;
  patternId?: string;
}

// Community post creation
export interface CommunityPostCreate {
  title: string;
  content: string;
  imageUrl?: string;
}

// Comment creation
export interface CommentCreate {
  content: string;
  postId: string;
}

// Pricing plan data
export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  interval: 'month' | 'year';
  features: string[];
  stripePriceId?: string;
}
