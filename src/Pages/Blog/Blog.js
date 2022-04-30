import React from 'react';
import Header from '../Shared/Header/Header';
import './Blog.css'

const Blog = () => {
	return (
		<div>
			<Header></Header>
			
			<div className='container blog'>
				<h3 className='text-center'>10 THINGS TO KNOW ABOUT VOLUNTEER RECRUITMENT AND RETENTION</h3>
				<img className='d-block mx-auto my-5 blogs-image1' src="https://images.squarespace-cdn.com/content/v1/54adc35ce4b07588aa06d28e/1524159850330-JBI1AIBAIPD2ZEBYVTJA/advice-advise-advisor-7097.jpg?format=1000w" alt="" />
				<p className='text-center'><small>Guest Post By Tiffany Rowe</small></p>
				<p style={{textAlign:'justify'}}>Consumers love to hear about companies with philanthropic sides, but the headline “Acme Corp. Gives $250k to Charity” rarely turns heads (or encourages clicks) in the new world of social media. Instead, businesses gain more visibility for their deeds when their entire workforce is engaged in doing good. Unfortunately, motivating workers to participate in donation drives or volunteering is easier said than done.
				<br />
				<br />
				Employee contributions are incredibly beneficial ― not only do they add to a company’s donations but they have been shown to boost productivity and profits through brand image. Here are some strategies to help any business engage its employees in philanthropic efforts.
				</p>

				<h6 className='mt-5'>Make It Understandable</h6>
				<p style={{textAlign:'justify'}}>A significant barrier that prevents many charitable organizations from receiving the donations they deserve is a lack of information. If a potential donor doesn’t understand an organization’s aims, it’s unlikely he or she will cough up any cash. The same is true within your company: If your employees don’t fully comprehend the good they can do by donating or volunteering, they probably won’t waste their money or time.
				<br />
				<br />
				Therefore, it behooves you to educate your workforce on your philanthropic goals. You can contact the organizations you support and request resources, like brochures, to help explain their causes and practices. Alternatively, you can schedule meetings between your teams and representatives of charities, during which your employees can become educated about donation and volunteering opportunities (and perhaps score some sweet swag).
				<br />
				<br />
				Social media is an incredibly useful tool when it comes to encouraging charitable activity. You can promote workplace donation by urging your employees to visit the social pages of the organizations you support. There, they can learn more about recent activities hosted by the charities as well as upcoming events that might be of interest. UNICEF and the World Wildlife Fund have particularly effective social sites, though you might want to support an organization closer to home. As long as your employees understand the goals of your company and your charitable partners, you will find it easier to generate employee good will.
				</p>

				<h6 className='mt-5'>Make It Easy</h6>
				<p style={{textAlign:'justify'}}>Even when employees fully grasp the implications of their potential good works, many will not participate because it demands too much effort. For example, food and toy drives require employees to spend time shopping for specific items and bringing those items to work ― or worse, to another location where the charities make collections. Fewer employees will bother engaging with charitable goals when it requires additional time and effort.
				<br />
				<br />
				Instead, you must make it as easy as possible for your employees to contribute. Online donation opportunities are perhaps the best option because they allow your employees to add money in any amount at any time from any place; therefore, they don’t feel any social stigma for contributing too little, and they can add more whenever they catch the benevolent bug. You might also institute payroll deductions, which automatically takes a donation from your employees’ paychecks every payday, so they can participate in doing good without thinking about it.
				<br />
				<br />
				If you want your employees to make donations of items as well as cash, you should be flexible regarding the type of gifts you’ll accept. Boat Angel is an excellent corporate partner as it accepts vehicles and vessels in nearly any condition and supports a wide range of charities that your employees can feel good about. You shouldn’t be restrictive of the contributions your employees make if you want them to feel engaged in your good works.
				</p>

				<h6 className='mt-5'>Make It Too Good to Miss</h6>
				<p style={{textAlign:'justify'}}>Any remaining employees who refuse to engage with your corporate giving attempts might object with the phrase, “What good does it do me?” Fortunately, you can win these holdouts over by incentivizing employee donations and volunteering in a number of ways to ensure that the activity truly does benefit everyone involved.
				<br />
				<br />
				Plenty of charities offer gifts and rewards for donations, and you can do the same for your employees. For example, contributions of a certain size might earn workers gift certificates; you might even encourage teamwork by holding a catered lunch once donations reach a particular amount. Likely, such opportunities will ignite your employees’ sense of competition, which could earn you the donations you crave.
				<br />
				<br />
				For the most part, people enjoy doing good. However, in a corporate setting, you must make it obvious and easy to do the right thing. Once your employees become engaged with your philanthropic goals, you won’t have to try so hard to earn donations; they will come to you ― as will the extra productivity and publicity associated with them.
				<br />
				<br />
				About the Author: Tiffany Rowe is a marketing administrator who assists in contributing resourceful content throughout the World Wide Web. Tiffany prides herself in her strong ability to provide high quality content that readers will find valuable. She enjoys connecting with other bloggers and collaborating for exclusive content in various niches. Favorite quote: “I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.” Maya Angelou
				</p>

			</div>
		</div>
	);
};

export default Blog;