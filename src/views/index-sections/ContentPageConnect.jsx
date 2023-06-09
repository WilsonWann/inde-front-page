import React from "react";
import styles from "./contentPage.module.css";
import NavigateContainer from "./NavigateContainer";

function ContentPageConnect({ contents}) {

    return (contents.map((content, index) => {
        console.log("🚀 ~ file: ContentPageConnect.jsx:8 ~ return ~ content:", content)
        if (index > 2) return;

        return (
            <NavigateContainer
                key={index}
                index={index}
                contentID={content._id}
                customClassName={"connect-flex-box"}
                category={content.categories.name}>

                <div className={styles['connect-image']}>

                    <img width='100%' height='100%' src={content.homeImagePath} alt={content.altText} />
                </div>
                <div className={styles['connect-title']}>
                    {content.title}
                </div>
            </NavigateContainer>
        );
    }));
}

export default ContentPageConnect;