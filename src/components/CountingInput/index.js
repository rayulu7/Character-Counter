import {UserInputItem, UserEnteredDetails} from './styledComponents'

const CountingInput = props => {
  const {userInputDetails} = props
  const {userEnteredText, textLength} = userInputDetails

  return (
    <UserInputItem>
      <UserEnteredDetails>
        {userEnteredText} : {textLength}
      </UserEnteredDetails>
    </UserInputItem>
  )
}

export default CountingInput
