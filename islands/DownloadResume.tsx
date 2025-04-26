const DownloadResume = () => {
  const get_resume = async () => {
    // fetch resume
    const res = await fetch("/api/resume");
    const is_pdf = res.headers.get("Content-Type") === "application/pdf";
    if (!is_pdf) {
      alert("Something went wrong!");
      return;
    }
    const resume_array_buffer = await res.arrayBuffer();
    const blob = new Blob([resume_array_buffer], {
      type: "application/pdf",
    });

    // Create a URL for the Blob
    const url = URL.createObjectURL(blob);

    // Create a temporary link element
    const link = document.createElement("a");
    link.href = url;
    link.download = "resume.pdf";

    // Programmatically click the link to trigger download
    document.body.appendChild(link);
    link.click();

    // Clean up the link element and URL
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <article class="flex gap-2 flex-row-reverse items-center">
      <code class="dark:text-white">Resume</code>
      <button class="cursor-pointer bg-white" onClick={() => get_resume()}>
        <img
          src="logos/download_resume.svg"
          alt="click to download my resume"
        />
      </button>
    </article>
  );
};

export default DownloadResume;
