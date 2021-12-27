import React from 'react'

export default function TopContent() {
    return (
        <div id="topcontent">
            <div>
                <p><b>Hello!</b> My name is <i>Leland Rogers</i> and I work at <a href="https://www.singlestore.com" id="s2">SingleStore</a>. I'm currently a support engineer helping our customers troubleshoot highlevel problems within their clusters. I've also got skills in React, and attended Lambda School where I learned the full web stack. Alongside that I have skill with Python, C, and other widely used languages.</p>
                <p>Most recently I've been utilizing Kubernetes to create and maintain orchestrated deployments of SingleStore and other applications within cloud environments.</p>
            </div>
            <p id="tooltip">Not your color? Refresh to get a new background.</p>
        </div>
    )
}
