import { useLocation, useParams, useSearchParams } from "react-router-dom";
import { every, flow, get, invoke, reduce, entries } from "lodash/fp";
// import { useQueries } from "@tanstack/react-query";
import { useHebrewPathTypes } from "./types";
// import {
// 	formatParams,
// 	generateGetNamesQueries,
// 	translateParams,
// 	translateUrlStrings,
// } from "./functions";

const useHebrewPath: useHebrewPathTypes = (urlStringsTranslationDict, urlParamGetNamesDict) => {
	const { pathname, search } = useLocation();
	// const params = useParams();
	// const [urlSearchParams] = useSearchParams();
	// const searchParams = flow(invoke("entries"), Object.fromEntries)(urlSearchParams);

	const initialHebrewUrl = `${pathname}${search}`;

	// const paramsNamesResults = useQueries({
	// 	queries: generateGetNamesQueries(formatParams(params, searchParams, urlParamGetNamesDict)),
	// });

	const isGetNamesSuccess = every(get("isSuccess"), paramsNamesResults);

	const translatedParamsHebrewUrl =
		isGetNamesSuccess && reduce(translateParams, initialHebrewUrl, paramsNamesResults);

	const finalHebrewUrl = urlStringsTranslationDict
		? reduce(
				(url, [key, value]) => translateUrlStrings(key, value, url),
				translatedParamsHebrewUrl,
				entries(urlStringsTranslationDict),
			)
		: translatedParamsHebrewUrl;

	return isGetNamesSuccess && finalHebrewUrl;
};

export default useHebrewPath;
