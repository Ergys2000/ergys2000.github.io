let margin = "0px";
const indentElements = ["P", "PRE", "UL", "OL"];

const indent = (container) => {
	const children = container.children;
	const headerPatter = /^H[1-6]$/;

	for(let i=0; i<children.length; i++) {
		const child = children[i];

		if ( headerPatter.test(child.tagName) ) {
			const style = window.getComputedStyle(child);
			margin = style.getPropertyValue("margin-left");
		} 

		if (indentElements.includes(child.tagName) && margin !== "0px" ) {
			child.style.marginLeft = margin;
		}

		if ( child.children.length > 0 ) {
			indent(child);
		}
	}
	
}

const content = document.getElementsByClassName("content")[0];

indent(content);
