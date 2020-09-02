
import { firstNameVar, lastNameVar } from '../cache'

export default function updateInput (text: string, type: string) {
  return type === 'fname' ? firstNameVar(text) : lastNameVar(text);
}