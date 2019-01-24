import React from "react"
import { connect } from "unistore/react"
import isEmpty from "lodash/isEmpty"

const Combinations = ({ pageData }) => {
  console.log()
  return isEmpty(pageData) ? null : (
    <Container>
      {pageData.combinations.map((combo, i) => {
        const currentCombination = {
          bg: combo[0],
          color: combo[1],
          borderColor: combo[1]
        }
        return (
          <Div>
            <TextBlock
              key={i}
              boxPadding={64}
              currentCombination={currentCombination}
            />
          </Div>
        )
      })}
    </Container>
  )
}

export default connect("pageData")(Combinations)
