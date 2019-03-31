import React from 'react'

import { TileWrapper, HoverContent, Image, StyledLink } from './Tile.styles'
import { categories } from 'Content'
import { Title, Text } from 'SharedComponents'

const Tile = ({ project: { id, preview_img, name, category } }) => {
    const CategoryList = category.map(c => (
        <>
            <span>{categories[c].name}</span>
            <br />
        </>
    ))
    return (
        <StyledLink to={`/${id}`}>
            <TileWrapper>
                <HoverContent>
                    <Title> {name}</Title>
                    <Text size="small">{CategoryList}</Text>
                </HoverContent>
                {preview_img && <Image src={preview_img.src} />}
            </TileWrapper>
        </StyledLink>
    )
}

export default Tile
