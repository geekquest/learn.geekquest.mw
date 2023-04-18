import React from 'react';

export default function({ title, author, embed }) {
    return (
        <div class="gq__featured-video">
            <h3>{title}</h3>
            <h6>By: {author}</h6>
            {embed}
        </div>
    )
}