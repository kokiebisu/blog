import styled from "styled-components"
import SearchResult from "."

export default styled(SearchResult)`
  background-color: white;
  max-height: 80vh;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
  position: absolute;
  z-index: 2;
  right: 0;
  top: 100%;
  margin-top: 0.5em;
  width: 80vw;
  max-width: 30em;
  box-shadow: 0 0 5px 0;
  padding: 1em;
  border-radius: 2px;
  display: ${props => (props.show ? `block` : `none`)};

  .HitCount {
    display: flex;
    justify-content: flex-end;
  }

  .ais-PoweredBy {
    display: flex;
    justify-content: flex-end;
    font-size: 80%;

    svg {
      width: 70px;
    }
  }
`
