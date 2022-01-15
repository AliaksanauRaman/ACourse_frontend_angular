import { isObject } from "../../../shared/utils/is-object.util";
import { isNumber } from "../../../shared/utils/is-number.util";
import { isString } from "../../../shared/utils/is-string.util";

export type DecodedJwtToken = Readonly<{
  /**
   * User unique id.
   */
  sub: number;
  /**
   * User email.
   */
  email: string;
  /**
   * User first name.
   */
  firstName: string;
  /**
   * User last name.
   */
  lastName: string;
  /**
   * Expiration date in seconds.
   */
  exp: number;
  /**
   * Date of JWT creation in secconds.
   */
  iat?: number;
}>;

export const isDecodedJwtToken = (value: unknown): value is DecodedJwtToken => {
  return isObject(value)
         && isNumber(value['sub'])
         && isString(value['email'])
         && isString(value['firstName'])
         && isString(value['lastName'])
         && isNumber(value['exp'])
         && (isNumber(value['iat']) || value['iat'] === undefined);
}
