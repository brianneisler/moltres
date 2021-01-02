import { collection } from '../../../../db'
import { omit } from '../../../../lang'
import { Action } from '../schemas'

const deleteAction = async (context, type, bucket, id) => {
  const Actions = collection(Action, omit(['parentRef'], context))
  const ref = Actions.doc(`${type}/${bucket}/${id}`)
  return ref.delete()
}

export default deleteAction
