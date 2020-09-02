import { createMockReactiveVar } from "../createMockReactiveVar";

export const mockFirstNameVar = createMockReactiveVar<string>('');
export const mockLastNameVar = createMockReactiveVar<string>('');