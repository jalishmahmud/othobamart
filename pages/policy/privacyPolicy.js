import { ArrowLeftOutlined } from "@ant-design/icons";
import Link from "next/link";

const PrivacyPolicy = () => {
	return (
		<div className="m-10">
			<Link href="/auth/login">
				<a>
					<button className="text-sky-500 flex items-center gap-2 mb-10">
						<ArrowLeftOutlined /> Back
					</button>
				</a>
			</Link>
			<h1 className="text-3xl font-semibold mb-5">Privacy Policy</h1>
			<div>
				<h5 className="font-semibold mt-2">
					Last Revised: December 16, 2013
				</h5>
				This privacy policy (&quot;policy&quot;) will help you
				understand how [name] (&quot;us&quot;, &quot;we&quot;,
				&quot;our&quot;) uses and protects the data you provide to us
				when you visit and use [website] (&quot;website&quot;,
				&quot;service&quot;). We reserve the right to change this policy
				at any given time, of which you will be promptly updated. If you
				want to make sure that you are up to date with the latest
				changes, we advise you to frequently visit this page.
				<h5 className="font-semibold mt-2">
					What User Data We Collect
				</h5>
				When you visit the website, we may collect the following data: •
				Your IP address. • Your contact information and email address. •
				Other information such as interests and preferences. • Data
				profile regarding your online behavior on our website.
				<h5 className="font-semibold mt-2">Why We Collect Your Data</h5>
				We are collecting your data for several reasons: • To better
				understand your needs. • To improve our services and products. •
				To send you promotional emails containing the information we
				think you will find interesting. • To contact you to fill out
				surveys and participate in other types of market research. • To
				customize our website according to your online behavior and
				personal preferences.
				<h5 className="font-semibold mt-2">
					Safeguarding and Securing the Data
				</h5>
				We are committed to securing your data and keeping it
				confidential. [name] has done all in its power to prevent data
				theft, unauthorized access, and disclosure by implementing the
				latest technologies and software, which help us safeguard all
				the information we collect online.
				<h5 className="font-semibold mt-2">Our Cookie Policy</h5>
				Once you agree to allow our website to use cookies, you also
				agree to use the data it collects regarding your online behavior
				(analyze web traffic, web pages you spend the most time on, and
				websites you visit). The data we collect by using cookies is
				used to customize our website to your needs. After we use the
				data for statistical analysis, the data is completely removed
				from our systems. Please note that cookies don&apos;t allow us
				to gain control of your computer in any way. They are strictly
				used to monitor which pages you find useful and which you do not
				so that we can provide a better experience for you. If you want
				to disable cookies, you can do it by accessing the settings of
				your internet browser. (Provide links for cookie settings for
				major internet browsers).
				<h5 className="font-semibold mt-2">Links to Other Websites</h5>
				Our website contains links that lead to other websites. If you
				click on these links [name] is not held responsible for your
				data and privacy protection. Visiting those websites is not
				governed by this privacy policy agreement. Make sure to read the
				privacy policy documentation of the website you go to from our
				website.
				<h5 className="font-semibold mt-2">
					Restricting the Collection of your Personal Data
				</h5>
				At some point, you might wish to restrict the use and collection
				of your personal data. You can achieve this by doing the
				following: When you are filling the forms on the website, make
				sure to check if there is a box which you can leave unchecked,
				if you don&apos;t want to disclose your personal information. If
				you have already agreed to share your information with us, feel
				free to contact us via email and we will be more than happy to
				change this for you. [name] will not lease, sell or distribute
				your personal information to any third parties, unless we have
				your permission. We might do so if the law forces us. Your
				personal information will be used when we need to send you
				promotional materials if you agree to this privacy policy.
			</div>
		</div>
	);
};

export default PrivacyPolicy;
