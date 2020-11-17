import { map, values } from '../../../../lang'
import {
  deleteUnclaimedPhoneNumber,
  findPhoneNumberClaimsByUserId
} from '../../phone_number_claim'
import { deleteUser } from '../../user'

const deletePendingUser = async (context, userId) => {
  const phoneNumberClaims = await findPhoneNumberClaimsByUserId(context, userId)
  // TODO BRN: Instead of doing this here, this should be handled by the
  // phone_number_claim module.
  // Need to add an action that dispatches and allows for other modules to add
  // to the batch delete
  await map(
    async (phoneNumberClaim) =>
      deleteUnclaimedPhoneNumber(context, phoneNumberClaim.phoneNumberId),
    values(phoneNumberClaims)
  )
  return deleteUser(context, userId)
}

export default deletePendingUser
