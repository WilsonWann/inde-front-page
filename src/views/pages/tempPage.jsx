import React, { useContext, useEffect } from 'react'
import { useParams, useNavigate } from "react-router-dom";
import { getPreviewContents, getCheckURLContents } from 'assets/js/sitemapContent';

import { TitleContext } from 'views/Index';

export default function TempPage() {

  const [state, dispatch] = useContext(TitleContext);

  const { id } = useParams();
  console.log("🚀 ~ file: tempPage.jsx:9 ~ TempPage ~ id:", id)
  const navigate = useNavigate()
  useEffect(() => {
    if (!id) return
    console.log("🚀 ~ file: tempPage.jsx:23 ~ useEffect ~ id:", id)

    if (id.indexOf('preview_') !== -1) {
      const previewID = id.replace('preview_', '')
      console.log("🚀 ~ file: tempPage.jsx:17 ~ useEffect ~ previewID:", previewID)
      const payload = { previewID }
      getPreviewContents(payload)
        .then(data => {
          console.log("🚀 ~ file: tempPage.jsx:21 ~ useEffect ~ data:", data)

        })

    } else {
      const payload = { id }
      getCheckURLContents(payload)
        .then(data => {
          console.log("🚀 ~ file: tempPage.jsx:36 ~ useEffect ~ data:", data)

        })
    }

  }, [id]);
  return (
    <div>

    </div>
  )
}
