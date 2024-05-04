import styled from "styled-components";
import AddRecipe from '../../components/AddRecipe'

const StyledContainer = styled.div`
    text-align: left;

`

function EditRecipe() {
    return (
    <div>
        <StyledContainer>
            <AddRecipe />
        </StyledContainer>
        </div>
        )
}
export default EditRecipe