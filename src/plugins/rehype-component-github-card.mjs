/// <reference types="mdast" />
import { h } from "hastscript";

/**
 * Creates a GitHub Card component.
 *
 * @param {Object} properties - The properties of the component.
 * @param {string} properties.repo - The GitHub repository in the format "owner/repo".
 * @param {import('mdast').RootContent[]} children - The children elements of the component.
 * @returns {import('mdast').Parent} The created GitHub Card component.
 */
export function GithubCardComponent(properties, children) {
	if (Array.isArray(children) && children.length !== 0)
		return h("div", { class: "hidden" }, [
			'Invalid directive. ("github" directive must be leaf type "::github{repo="owner/repo"}")',
		]);

	if (!properties.repo || !properties.repo.includes("/"))
		return h(
			"div",
			{ class: "hidden" },
			'Invalid repository. ("repo" attributte must be in the format "owner/repo")',
		);

	const repo = properties.repo;
	const cardUuid = `GC${Math.random().toString(36).slice(-6)}`; // Collisions are not important

	const nAvatar = h(`div#${cardUuid}-avatar`, { class: "gc-avatar" });
	const nLanguage = h(
		`span#${cardUuid}-language`,
		{ class: "gc-language" },
		"Waiting...",
	);

	const nTitle = h("div", { class: "gc-titlebar" }, [
		h("div", { class: "gc-titlebar-left" }, [
			h("div", { class: "gc-owner" }, [
				nAvatar,
				h("div", { class: "gc-user" }, repo.split("/")[0]),
			]),
			h("div", { class: "gc-divider" }, "/"),
			h("div", { class: "gc-repo" }, repo.split("/")[1]),
		]),
		h("div", { class: "github-logo" }),
	]);

	const nDescription = h(
		`div#${cardUuid}-description`,
		{ class: "gc-description" },
		"Waiting for api.github.com...",
	);

	const nStars = h(`div#${cardUuid}-stars`, { class: "gc-stars" }, "00K");
	const nForks = h(`div#${cardUuid}-forks`, { class: "gc-forks" }, "0K");
	const nLicense = h(
		`div#${cardUuid}-license`,
		{ class: "gc-license" },
		"0K",
	);

	const nScript = h(
		`script#${cardUuid}-script`,
		{ type: "text/javascript", defer: true },
		`
      const cardEl = document.getElementById('${cardUuid}-card');
      const descriptionEl = document.getElementById('${cardUuid}-description');
      const languageEl = document.getElementById('${cardUuid}-language');
      const forksEl = document.getElementById('${cardUuid}-forks');
      const starsEl = document.getElementById('${cardUuid}-stars');
      const licenseEl = document.getElementById('${cardUuid}-license');
      const avatarEl = document.getElementById('${cardUuid}-avatar');

      const setFetchError = (message) => {
        if (descriptionEl) descriptionEl.innerText = message;
        if (languageEl) languageEl.innerText = "unknown";
        if (forksEl) forksEl.innerText = "-";
        if (starsEl) starsEl.innerText = "-";
        if (licenseEl) licenseEl.innerText = "-";
        cardEl?.classList.remove("fetch-waiting");
        cardEl?.classList.add("fetch-error");
      };

      fetch('https://api.github.com/repos/${repo}', { referrerPolicy: "no-referrer" })
        .then(async (response) => {
          const data = await response.json().catch(() => ({}));
          if (!response.ok) {
            const apiMessage = typeof data?.message === "string" ? data.message : ("HTTP " + response.status);
            throw new Error(apiMessage);
          }
          return data;
        })
        .then((data) => {
          if (descriptionEl) {
            descriptionEl.innerText = data.description?.replace(/:[a-zA-Z0-9_]+:/g, '') || "Description not set";
          }
          if (languageEl) languageEl.innerText = data.language || "unknown";
          if (forksEl) {
            forksEl.innerText = Intl.NumberFormat('en-us', { notation: "compact", maximumFractionDigits: 1 })
              .format(Number(data.forks || 0))
              .replaceAll("\u202f", '');
          }
          if (starsEl) {
            starsEl.innerText = Intl.NumberFormat('en-us', { notation: "compact", maximumFractionDigits: 1 })
              .format(Number(data.stargazers_count || 0))
              .replaceAll("\u202f", '');
          }
          if (licenseEl) licenseEl.innerText = data.license?.spdx_id || "no-license";

          if (avatarEl) {
            const avatarUrl = data?.owner?.avatar_url;
            if (avatarUrl) {
              avatarEl.style.backgroundImage = 'url(' + avatarUrl + ')';
              avatarEl.style.backgroundColor = 'transparent';
            }
          }

          cardEl?.classList.remove("fetch-waiting");
          console.log("[GITHUB-CARD] Loaded card for ${repo} | ${cardUuid}.")
        })
        .catch((err) => {
          setFetchError("GitHub card unavailable (API rate limit / network blocked).");
          console.warn("[GITHUB-CARD] (Error) Loading card for ${repo} | ${cardUuid}.", err);
        });
    `,
	);

	return h(
		`a#${cardUuid}-card`,
		{
			class: "card-github fetch-waiting no-styling",
			href: `https://github.com/${repo}`,
			target: "_blank",
			repo,
		},
		[
			nTitle,
			nDescription,
			h("div", { class: "gc-infobar" }, [
				nStars,
				nForks,
				nLicense,
				nLanguage,
			]),
			nScript,
		],
	);
}
