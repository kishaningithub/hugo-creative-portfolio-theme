# Creative portfolio theme for hugo

[![Join the chat at https://gitter.im/hugo-creative-portfolio-theme/Lobby](https://badges.gitter.im/hugo-creative-portfolio-theme/Lobby.svg)](https://gitter.im/hugo-creative-portfolio-theme/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Buy me a coffee](https://img.shields.io/badge/☕-Buy%20me%20a%20coffee-blue.svg)](https://www.paypal.me/kishansh/5)

Creative portfolio is a clean and elegant template mainly made for designers and creatives but can be easily transformed into a generic website.

This Hugo theme was ported from [Bootstrapious](https://bootstrapious.com/p/creative-portfolio) for training and fun. It has a very nice landing page, a comments system by Disqus, contact forms by Formspree and Google Analytics.

![screenshot](https://raw.githubusercontent.com/kishaningithub/hugo-creative-portfolio-theme/master/images/screenshot.png)

## Installation

Go to the directory where you have your Hugo site and run:

```
$ mkdir themes
$ cd themes
$ git clone https://github.com/kishaningithub/hugo-creative-portfolio-theme.git
$ rm -rf hugo-creative-portfolio-theme/.git
```

For more information read the official [setup guide](https://gohugo.io/overview/installing/) of Hugo.

## Configuration

After installing the Universal theme successfully, we recommend you to take a look at the [exampleSite](https://github.com/kishaningithub/hugo-creative-portfolio-theme/tree/master/exampleSite) directory. You will find a working Hugo site configured with the Universal theme that you can use as a starting point for your site.

First, let's take a look at the [config.toml](https://github.com/kishaningithub/hugo-creative-portfolio-theme/tree/master/exampleSite/config.toml). It will be useful to learn how to customize your site. Feel free to play around with the settings.

### Style

You can change the color of the theme by modifying the following key.

```toml
style = "default"
```

Available options are: `default` (pink), `blue`, `green`, `pink`, `red`, `sea`, `violet`.

### More style customizations?

Create `css/custom.css` in your `<<base dir>>/static` folder and add all your custom styling.

### Comments

The optional comments system is powered by [Disqus](https://disqus.com). If you want to enable comments, create an account in Disqus and write down your shortname.

```toml
disqusShortname = "your-disqus-short-name"
```

You can disable the comments system by leaving the `disqusShortname` empty.

### Google Analytics

You can optionally enable Google Analytics. Type your tracking code in the ``.

```toml
googleAnalytics = "UA-XXXXX-X"
```

Leave the `googleAnalytics` key empty to disable it.

### Make the contact form working

Since this page will be static, you can use [formspree.io](//formspree.io/) as proxy to send the actual email. Each month, visitors can send you up to one thousand emails without incurring extra charges. Begin the setup by following the steps below:

1. Enter your email address under 'email' in the [`config.toml`](https://github.com/kishaningithub/hugo-creative-portfolio-theme/tree/master/exampleSite/config.toml)
2. Upload the generated site to your server
3. Send a dummy email yourself to confirm your account
4. Click the confirm link in the email from [formspree.io](//formspree.io/)
5. You're done. Happy mailing!

### Nearly finished

In order to see your site in action, run Hugo's built-in local server.

```
$ hugo server
```

Now enter [`localhost:1313`](http://localhost:1313) in the address bar of your browser.

## Deployment
 - [Deploying to Amazon S3](https://github.com/kishaningithub/hugo-creative-portfolio-theme/wiki/Deploying-to-Amazon-S3)

## Base theme version (From bootstrapious)
 - 1.0

## Contributing

Have you found a bug or got an idea for a new feature? Feel free to use the [issue tracker](https://github.com/kishaningithub/hugo-creative-portfolio-theme/issues) to let me know. Or make directly a [pull request](https://github.com/kishaningithub/hugo-creative-portfolio-theme/pulls).

## License

This port is released under the MIT License. Check the [original theme license](https://bootstrapious.com/p/creative-portfolio) for additional licensing information.

## Thanks

Thanks to [Steve Francia](https://github.com/spf13) for creating Hugo and the awesome community around the project. And also thanks to [Bootstrapious](http://bootstrapious.com/) for creating this awesome theme.
