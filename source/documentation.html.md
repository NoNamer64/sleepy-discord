---
title: Sleepy Discord Documentation

language_tabs:

toc_footers:
  - <a href='https://github.com/tripit/slate'>Documentation Powered by Slate</a>

includes:

search: true
---

# A Warm Welcome

Hello there, if you are looking for some help on using the Sleepy Discord Library, then you came to the right place (I hope it is). If you have any questions you can ask me ( Sleepy Flower Girl ) on Discord; right now there is no official server for this library, but you can always find me on the [Discord API server](https://discord.gg/discord-api). If you like to help, you can always make a pull request for the docs or the library itself on github. Thanks!

# Topics
<table>
  <tbody>
    <tr>
      <td><a href="compile.html">How To Compile Sleepy Discord</a></td>
      <td><a href="basic text bot.html">How To Make a Basic Text Bot</a></td>
    </tr>
    <tr>
      <td><a href="link.html">How To Link Sleepy Discord</a></td>
      <td><a href="voice.html">Creating Applications with Voice</a></td>
    </tr>
    <tr>
      <td><a href="breaking changes.html">Breaking Changes</a></td>
      <td><a>  </a></td>
    </tr>
  </tbody>
</table>

# DiscordClient

```cpp
class DiscordClient {
```
The DiscordClient class is the base class for a client that can be used to send and read messages.

[Declared in `client.h`](https://github.com/NoNamer64/sleepy-discord/blob/master/include/sleepy_discord/client.h)

<h2 id="discordclient-functions">Functions</h2>

### sendMessage

 ```cpp
ObjectResponse<Message> sendMessage(Snowflake<Channel> channelID, std::string message, bool tts = false);
```
```cpp
#include <sleepy_discord.h>
#include <iostream>

class MyClientClass : public SleepyDiscord::DiscordClient {
public:
	using SleepyDiscord::DiscordClient::DiscordClient;

	void onMessage(SleepyDiscord::Message message) override {
		if (message.content == "hello") {
			SleepyDiscord::Message message = sendMessage(message.channelID, "Hello");
			std::cout << message.content;
		}
	}
}

int main() {
	MyClientClass client("token", 2);
	client.run();

	return 0;
}
```
>Output: Hello

```shell
Hello
```

Posts a message to a channel.

<aside class="note">
If you want to send a new line, use ``\\\\n``. Normal escape chars do not work, use ``\\\\`` for escapes. For example, ``\\\\"`` for quotations marks.
</aside>

#### Parameters
<table>
  <tbody>
      <tr><td><strong>channelID</strong></td>
        <td>The id of the channel you want to post the message to</td></tr>
      <tr><td><strong>message</strong></td>
        <td>The message you want to post</td></tr>
      <tr><td><strong>tts</strong></td>
        <td>Short for Text to Speech. When this is true, anyone with text to speech messages on will have their computer read the message out load to the them</td></tr>
  </tbody>
</table>

#### Return value
The Message you just sent as a Message object

#### Other Details
[Declared in `client.h`](https://github.com/NoNamer64/sleepy-discord/blob/master/include/sleepy_discord/client.h) and [defined in `endpoints.cpp`](https://github.com/yourWaifu/sleepy-discord/blob/master/sleepy_discord/endpoints.cpp)

Uses [Create Message](https://discordapp.com/developers/docs/resources/channel#create-message)

### uploadFile

 ```cpp
ObjectResponse<Message> uploadFile(Snowflake<Channel> channelID, std::string fileLocation, std::string message);
```
```cpp
#include <sleepy_discord.h>
#include <iostream>

class MyClientClass : public SleepyDiscord::DiscordClient {
public:
	using SleepyDiscord::DiscordClient::DiscordClient;

	void onMessage(SleepyDiscord::Message message) override {
		if (message.content == "rules")
			uploadFile(message.channelID, "res/rules.txt", "These are the rules");
	}
}

int main() {
	MyClientClass client("token", 2);
	client.run();

	return 0;
}
```

```shell
'rules.txt'
These are the rules
```


Uploads a file with a message to a channel.

#### Parameters
<table>
  <tbody>
      <tr><td><strong>channelID</strong></td>
        <td>The id of the channel you want to upload the file to</td></tr>
      <tr><td><strong>fileLocation</strong></td>
        <td>The location of the file you want to upload</td></tr>
      <tr><td><strong>message</strong></td>
        <td>The message you want to send with the file</td></tr>
  </tbody>
</table>

#### Return value
The Message you just sent as a Message object

#### Other Details
[Declared in `client.h`](https://github.com/NoNamer64/sleepy-discord/blob/master/include/sleepy_discord/client.h) and [defined in `endpoints.cpp`](https://github.com/yourWaifu/sleepy-discord/blob/master/sleepy_discord/endpoints.cpp)

Uses [Create Message](https://discordapp.com/developers/docs/resources/channel#create-message)

### addReaction

 ```cpp
bool addReaction(Snowflake<Channel> channelID, Snowflake<Message> messageID, std::string emoji);
```
```cpp
#include <sleepy_discord.h>

class myDiscordClient : public SleepyDiscord::DiscordClient {
public:
	using SleepyDiscord::DiscordClient::DiscordClient;

	void onMessage(SleepyDiscord::Message message) override {
		addReaction(message.channelID, message.ID, "%F0%9F%98%95");
	}
}

int main() {
	myDiscordClient client("token", 2);
	client.run();

	return 0;
}
```
>Output: added 😕 reaction

Adds a reaction to a message.

#### Parameters
<table>
  <tbody>
    <tr>
      <td><strong>channelID</strong></td>
      <td>The id of the channel with the message you want to add a reaction to</td>
    </tr>
    <tr>
      <td><strong>messageID</strong></td>
      <td>The id of the message you want to add a reaction to</td>
    </tr>
    <tr>
      <td><strong>emoji</strong></td>
      <td>The emoji you want to use for the reaction
        <ul>
          <li>Use <a href="https://en.wikipedia.org/wiki/Percent-encoding">Percent Encoding</a> for Unicode Emoji</li>
          <li>For custom emoji, use the id of the emoji (I haven't tested this myself)</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

#### Return value
Returns ``true`` on success

#### Other Details
[Declared in `client.h`](https://github.com/NoNamer64/sleepy-discord/blob/master/include/sleepy_discord/client.h) and [defined in `endpoints.cpp`](https://github.com/yourWaifu/sleepy-discord/blob/master/sleepy_discord/endpoints.cpp)

Uses [Create Reaction](https://discordapp.com/developers/docs/resources/channel#create-reaction)

### removeReaction

 ```cpp
bool removeReaction(Snowflake<Channel> channelID, Snowflake<Message> messageID, std::string emoji, SnowFlake<User> userID = "@me");
```
```cpp
#include <sleepy_discord.h>

class myDiscordClient : public SleepyDiscord::DiscordClient {
public:
	using SleepyDiscord::DiscordClient::DiscordClient;

	void onMessage(SleepyDiscord::Message message) override {
		removeReaction(message.channelID, message.ID, "%F0%9F%98%95", "@me");
	}
}

int main() {
	myDiscordClient client("token", 2);
	client.run();

	return 0;
}
```
>Output: removed 😕 reaction

Removes a reaction from a message.

#### Parameters
<table>
  <tbody>
    <tr>
      <td><strong>channelID</strong></td>
      <td>The id of the channel with the message you want to remove a reaction from</td>
    </tr>
    <tr>
      <td><strong>messageID</strong></td>
      <td>The id of the message you want to remove a reaction from</td>
    </tr>
    <tr>
      <td><strong>emoji</strong></td>
      <td>The emoji you want to remove from the reaction
        <ul>
          <li>Use <a href="https://en.wikipedia.org/wiki/Percent-encoding">Percent Encoding</a> for Unicode Emoji</li>
          <li>For custom emoji, use the id of the emoji (I haven't tested this myself)</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><strong>userID</strong></td>
      <td>The id of the user that you want to remove the reaction from</td>
    </tr>
  </tbody>
</table>

#### Return value
Returns ``true`` on success

#### Other Details
[Declared in `client.h`](https://github.com/NoNamer64/sleepy-discord/blob/master/include/sleepy_discord/client.h) and [defined in `endpoints.cpp`](https://github.com/yourWaifu/sleepy-discord/blob/master/sleepy_discord/endpoints.cpp)

Uses [Delete Reaction](https://discordapp.com/developers/docs/resources/channel#delete-own-reaction)

### removeAllReactions

 ```cpp
void removeAllReactions(Snowflake<Channel> channelID, Snowflake<Message> messageID);
```

Removes all reactions from a message.

#### Parameters
<table>
  <tbody>
    <tr>
      <td><strong>channelID</strong></td>
      <td>The id of the channel with the message you want to remove all reactions from</td>
    </tr>
    <tr>
      <td><strong>messageID</strong></td>
      <td>The id of the message you want to remove all reactions from</td>
    </tr>
  </tbody>
</table>

#### Other Details
[Declared in `client.h`](https://github.com/NoNamer64/sleepy-discord/blob/master/include/sleepy_discord/client.h) and [defined in `endpoints.cpp`](https://github.com/yourWaifu/sleepy-discord/blob/master/sleepy_discord/endpoints.cpp)

Uses [Delete All Reactions](https://discordapp.com/developers/docs/resources/channel#delete-all-reactions)

### deleteReaction
```cpp
bool deleteReaction(Snowflake<Channel> channelID, Snowflake<Message> messageID, std::string emoji);
```

See [removeReaction](#removereaction)

### deleteAllReactions
```cpp
void deleteAllReactions(Snowflake<Channel> channelID, Snowflake<Message> messageID);
```

See [removeAllReactions](#removeallreactions)

### getReactions

 ```cpp
ArrayResponse<Reaction> getReactions(Snowflake<Channel> channelID, Snowflake<Message> messageID, std::string emoji);
```
```cpp
#include <sleepy_discord.h>
#include <iostream>

class MyClientClass : public SleepyDiscord::DiscordClient {
public:
	using SleepyDiscord::DiscordClient::DiscordClient;

	void onMessage(SleepyDiscord::Message message) override {
		ArrayResponse<Reaction> reactions = getReactions(message.channelID, message.ID, "%F0%9F%98%95");
		std::cout << reactions.text;
	}
}

int main() {
	MyClientClass client("token", 2);
	client.run();

 return 0;
}
```
>Output: [{"username": "User", "discriminator": "0000", "bot": true, "id": "000000000000000000", "avatar": "00000000000000000000000000000000"}]

Get an array of all users who reacted with this emoji on a message

#### Parameters
<table>
  <tbody>
    <tr>
      <td><strong>channelID</strong></td>
      <td>The id of the channel with the message you want to get all users that reacted with this emoji from</td>
    </tr>
    <tr>
      <td><strong>messageID</strong></td>
      <td>The id of the message you want to get all users that reacted with this emoji from</td>
    </tr>
    <tr>
      <td><strong>emoji</strong></td>
      <td>The reacted emoji you want to get all users from</td>
    </tr>
  </tbody>
</table>

#### Return value
Returns an array of ``Reaction`` objects

#### Other Details
[Declared in `client.h`](https://github.com/NoNamer64/sleepy-discord/blob/master/include/sleepy_discord/client.h) and [defined in `endpoints.cpp`](https://github.com/yourWaifu/sleepy-discord/blob/master/sleepy_discord/endpoints.cpp)

Uses [Get Reactions](https://discordapp.com/developers/docs/resources/channel#get-reactions)

### getMessage

```cpp
ObjectResponse<Message> getMessage(Snowflake<Channel> channelID, Snowflake<Message> messageID);
```

Gets message from a message id

#### Parameters
<table>
  <tbody>
      <tr><td><strong>channelID</strong></td>
        <td>The id of the channel with the message that you want get</td></tr>
      <tr><td><strong>messageID</strong></td>
        <td>The id of the message you want to get</td></tr>
  </tbody>
</table>

#### Return value
Returns a ``Message`` object from the message you requested

#### Other Details
[Declared in `client.h`](https://github.com/NoNamer64/sleepy-discord/blob/master/include/sleepy_discord/client.h) and [defined in `endpoints.cpp`](https://github.com/yourWaifu/sleepy-discord/blob/master/sleepy_discord/endpoints.cpp)

Uses [Get Channel Message](https://discordapp.com/developers/docs/resources/channel#get-channel-message)

### getMessages

```cpp
ArrayResponse<Message> getMessages(Snowflake<Channel> channelID, GetMessagesKey when, Snowflake<Message> messageID, uint8_t _limit)
```

Gets an array of messages from a channel id around, before or after a message from a message id

#### Parameters
<table>
  <tbody>
      <tr><td><strong>channelID</strong></td>
        <td>The id of the channel you want to get the messages from</td></tr>
      <tr><td><strong>when</strong></td>
        <td>The key for the location of the messages</td></tr>
      <tr><td><strong>messageID</strong></td>
        <td>The id of the message you want to get messages with when</td></tr>
      <tr><td><strong>_limit</strong></td>
        <td>The limit for the amount of messages received</td></tr>
  </tbody>
</table>

#### Return value
Returns an array of ``Message`` objects

#### Other Details
[Declared in `client.h`](https://github.com/NoNamer64/sleepy-discord/blob/master/include/sleepy_discord/client.h) and [defined in `endpoints.cpp`](https://github.com/yourWaifu/sleepy-discord/blob/master/sleepy_discord/endpoints.cpp)

Uses [Get Channel Messages](https://discordapp.com/developers/docs/resources/channel#get-channel-messages)

### editMessage

```cpp
ObjectResponse<Message> editMessage(Snowflake<Channel> channelID, Snowflake<Message> messageID, std::string newMessage);
ObjectResponse<Message> editMessage(Message message, std::string newMessage);
```

Edits an existing message

#### Parameters
<table>
  <tbody>
      <tr><td><strong>channelID</strong></td>
        <td>The id of the channel with the message that you want to edit</td></tr>
      <tr><td><strong>messageID</strong></td>
        <td>The id of the message you want to edit</td></tr>
      <tr><td><strong>message</strong></td>
        <td>The message with the id of the message that you want to edit</td></tr>
      <tr><td><strong>newMessage</strong></td>
        <td>The new message that you want the message to be</td></tr>
  </tbody>
</table>

#### Return value
Returns the message you just edited

#### Other Details
[Declared in `client.h`](https://github.com/NoNamer64/sleepy-discord/blob/master/include/sleepy_discord/client.h) and [defined in `endpoints.cpp`](https://github.com/yourWaifu/sleepy-discord/blob/master/sleepy_discord/endpoints.cpp)

Uses [Edit Message](https://discordapp.com/developers/docs/resources/channel#edit-message)

### pinMessage

```cpp
bool pinMessage(Snowflake<Channel> channelID, Snowflake<Message> messageID);
```

Puts a message into the pinned messages of a channel

#### Parameters
<table>
  <tbody>
      <tr><td><strong>channelID</strong></td>
        <td>The id of the channel with the message that you want to pin</td></tr>
      <tr><td><strong>messageID</strong></td>
        <td>The id of the message you want to pin</td></tr>
  </tbody>
</table>

#### Return value
Returns ``true`` on success

#### Other Details
[Declared in `client.h`](https://github.com/NoNamer64/sleepy-discord/blob/master/include/sleepy_discord/client.h) and [defined in `endpoints.cpp`](https://github.com/yourWaifu/sleepy-discord/blob/master/sleepy_discord/endpoints.cpp)

Uses [Add Pinned Channel Message](https://discordapp.com/developers/docs/resources/channel#add-pinned-channel-message)

### unpinMessage

```cpp
bool unpinMessage(Snowflake<Channel> channelID, Snowflake<Message> messageID);
```

Removes a message from the pinned messages of a channel

#### Parameters
<table>
  <tbody>
      <tr><td><strong>channelID</strong></td>
        <td>The id of the channel with the message that you want to unpin</td></tr>
      <tr><td><strong>messageID</strong></td>
        <td>The id of the message you want to unpin</td></tr>
  </tbody>
</table>

#### Return value
Returns ``true`` on success

#### Other Details
[Declared in `client.h`](https://github.com/NoNamer64/sleepy-discord/blob/master/include/sleepy_discord/client.h) and [defined in `endpoints.cpp`](https://github.com/yourWaifu/sleepy-discord/blob/master/sleepy_discord/endpoints.cpp)

Uses [Delete Pinned Channel Message](https://discordapp.com/developers/docs/resources/channel#delete-pinned-channel-message)

### getPinnedMessages

```cpp
bool getPinnedMessages(Snowflake<Channel> channelID);
```

Gets all pinned messages in a channel

#### Parameters
<table>
  <tbody>
      <tr><td><strong>channelID</strong></td>
        <td>The id of the channel where you want to get the pinned messages from</td></tr>
  </tbody>
</table>

#### Return value
Returns an array of ``Message`` objects

#### Other Details
[Declared in `client.h`](https://github.com/NoNamer64/sleepy-discord/blob/master/include/sleepy_discord/client.h) and [defined in `endpoints.cpp`](https://github.com/yourWaifu/sleepy-discord/blob/master/sleepy_discord/endpoints.cpp)

Uses [Get Messages](https://discordapp.com/developers/docs/resources/channel#get-pinned-messages)

### deleteMessage

```cpp
bool deleteMessage(Snowflake<Channel> channelID, Snowflake<Message> messageID);
```

Deletes a message

#### Parameters
<table>
  <tbody>
      <tr><td><strong>channelID</strong></td>
        <td>The id of the channel with the message that you want to delete</td></tr>
      <tr><td><strong>messageID</strong></td>
        <td>The id of the message you want to delete</td></tr>
  </tbody>
</table>

#### Return value
Returns ``true`` on success

#### Other Details
[Declared in `client.h`](https://github.com/NoNamer64/sleepy-discord/blob/master/include/sleepy_discord/client.h) and [defined in `endpoints.cpp`](https://github.com/yourWaifu/sleepy-discord/blob/master/sleepy_discord/endpoints.cpp)

Uses [Delete Message](https://discordapp.com/developers/docs/resources/channel#delete-message)

### bulkDeleteMessages

```cpp
bool bulkDeleteMessages(Snowflake<Channel> channelID, std::vector<Snowflake<Message>> messageIDs);
```

Bulk deletes messages

#### Parameters
<table>
  <tbody>
      <tr><td><strong>channelID</strong></td>
        <td>The id of the channel with the messages that you want to delete</td></tr>
      <tr><td><strong>messageIDs</strong></td>
        <td>An array of ids of the messages you want to delete</td></tr>
  </tbody>
</table>

#### Return value
Returns ``true`` on success

#### Other Details
[Declared in `client.h`](https://github.com/NoNamer64/sleepy-discord/blob/master/include/sleepy_discord/client.h) and [defined in `endpoints.cpp`](https://github.com/yourWaifu/sleepy-discord/blob/master/sleepy_discord/endpoints.cpp)

Uses [Bulk Delete Messages](https://discordapp.com/developers/docs/resources/channel#bulk-delete-messages)

### getCurrentUser

```cpp
ObjectResponse<User> getCurrentUser();
```

Gets the current user

#### Return value
Returns a ``User`` object

#### Other Details
[Declared in `client.h`](https://github.com/NoNamer64/sleepy-discord/blob/master/include/sleepy_discord/client.h) and [defined in `endpoints.cpp`](https://github.com/yourWaifu/sleepy-discord/blob/master/sleepy_discord/endpoints.cpp)

Uses [Get Current User](https://discordapp.com/developers/docs/resources/user#get-current-user)

### getUser

```cpp
ObjectResponse<User> getUser(Snowflake<User> userID);
```

Gets the user from a user id

#### Parameters
<table>
  <tbody>
      <tr><td><strong>userID</strong></td>
        <td>The id of the user you want to get</td></tr>
  </tbody>
</table>

#### Return value
Returns a ``User`` object

#### Other Details
[Declared in `client.h`](https://github.com/NoNamer64/sleepy-discord/blob/master/include/sleepy_discord/client.h) and [defined in `endpoints.cpp`](https://github.com/yourWaifu/sleepy-discord/blob/master/sleepy_discord/endpoints.cpp)

Uses [Get User](https://discordapp.com/developers/docs/resources/user#get-user)

### getUserConnections

```cpp
ArrayResponse<Connection> getUserConnections();
```

Gets all the connections from the current user

#### Return value
Returns a ``Connection`` object

#### Other Details
[Declared in `client.h`](https://github.com/NoNamer64/sleepy-discord/blob/master/include/sleepy_discord/client.h) and [defined in `endpoints.cpp`](https://github.com/yourWaifu/sleepy-discord/blob/master/sleepy_discord/endpoints.cpp)

Uses [Get User Connections](https://discordapp.com/developers/docs/resources/user#get-user-connections)

### getDirectMessageChannels

```cpp
ArrayResponse<DMChannel> getDirectMessageChannels();
```

Gets the direct message channels for the current user

#### Return value
Returns a ``DMChannel`` object

#### Other Details
[Declared in `client.h`](https://github.com/NoNamer64/sleepy-discord/blob/master/include/sleepy_discord/client.h) and [defined in `endpoints.cpp`](https://github.com/yourWaifu/sleepy-discord/blob/master/sleepy_discord/endpoints.cpp)

Uses [Get User DMs](https://discordapp.com/developers/docs/resources/user#get-user-dms)

### createDirectMessageChannel

```cpp
ObjectResponse<DMChannel> createDirectMessageChannel(std::string recipientID);
```

Creates a DMChannel with the current user and a recipient

#### Parameters
<table>
  <tbody>
      <tr><td><strong>recipientID</strong></td>
        <td>The id of the recipient you want to create a DMChannel with</td></tr>
  </tbody>
</table>

#### Return value
Returns a ``DMChannel`` object

#### Other Details
[Declared in `client.h`](https://github.com/NoNamer64/sleepy-discord/blob/master/include/sleepy_discord/client.h) and [defined in `endpoints.cpp`](https://github.com/yourWaifu/sleepy-discord/blob/master/sleepy_discord/endpoints.cpp)

Uses [Create DM](https://discordapp.com/developers/docs/resources/user#create-dm)

### muteServerMember

```cpp
bool muteServerMember(Snowflake<Server> serverID, Snowflake<User> userID, bool mute = true);
```

Mutes or unmutes userID in server

#### Parameters
<table>
  <tbody>
      <tr><td><strong>serverID</strong></td>
        <td>The id of the server where you want to mute or unmute the member</td></tr>
      <tr><td><strong>userID</strong></td>
        <td>The id of the user you want to mute or unmute</td></tr>
      <tr><td><strong>mute</strong></td>
        <td>Wheter you want to mute or unmute the member</td></tr>
  </tbody>
</table>

#### Return value
Returns ``true`` on success

#### Other Details
[Declared in `client.h`](https://github.com/NoNamer64/sleepy-discord/blob/master/include/sleepy_discord/client.h) and [defined in `endpoints.cpp`](https://github.com/yourWaifu/sleepy-discord/blob/master/sleepy_discord/endpoints.cpp)

Uses [Modify Guild Member](https://discordapp.com/developers/docs/resources/guild#modify-guild-member)

### editNickname

```cpp
bool editNickname(Snowflake<Server> serverID, std::string newNickname);
```

Changes the name that is displayed on a server

#### Parameters
<table>
  <tbody>
      <tr><td><strong>serverID</strong></td>
        <td>The id of the server where you want to this nickname</td></tr>
      <tr><td><strong>newNickname</strong></td>
        <td>The Nickname that you want the current user to have</td></tr>
  </tbody>
</table>

#### Return value
Returns ``true`` on success

#### Other Details
[Declared in `client.h`](https://github.com/NoNamer64/sleepy-discord/blob/master/include/sleepy_discord/client.h) and [defined in `endpoints.cpp`](https://github.com/yourWaifu/sleepy-discord/blob/master/sleepy_discord/endpoints.cpp)

Uses [Modify Current User Nick](https://discordapp.com/developers/docs/resources/guild#modify-current-user-nick)

### addRole

```cpp
bool addRole(Snowflake<Server> serverID, Snowflake<User> userID, Snowflake<Role> roleID);
```

Gives a member a role on a server

#### Parameters
<table>
  <tbody>
      <tr><td><strong>serverID</strong></td>
        <td>The id of the server with the user you want to give the role to</td></tr>
      <tr><td><strong>memberID</strong></td>
        <td>The id of the user that you want to give the role to</td></tr>
      <tr><td><strong>roleID</strong></td>
        <td>The id of role that you want to give</td></tr>
  </tbody>
</table>

#### Return value
Returns ``true`` on success

#### Other Details
[Declared in `client.h`](https://github.com/NoNamer64/sleepy-discord/blob/master/include/sleepy_discord/client.h) and [defined in `endpoints.cpp`](https://github.com/yourWaifu/sleepy-discord/blob/master/sleepy_discord/endpoints.cpp)

Uses [Add Guild Member Role](https://discordapp.com/developers/docs/resources/guild#add-guild-member-role)

### removeRole

```cpp
bool removeRole(Snowflake<Server> serverID, Snowflake<User> userID, Snowflake<Role> roleID);
```

Takes away a role from a member on a server

#### Parameters
<table>
  <tbody>
      <tr><td><strong>serverID</strong></td>
        <td>The id of the server with the user you want to remove the role from</td></tr>
      <tr><td><strong>memberID</strong></td>
        <td>The id of the user that you want to remove the role from</td></tr>
      <tr><td><strong>roleID</strong></td>
        <td>The id of role that you want to remove from the user</td></tr>
  </tbody>
</table>

#### Return value
Returns ``true`` on success

#### Other Details
[Declared in `client.h`](https://github.com/NoNamer64/sleepy-discord/blob/master/include/sleepy_discord/client.h) and [defined in `endpoints.cpp`](https://github.com/yourWaifu/sleepy-discord/blob/master/sleepy_discord/endpoints.cpp)

Uses [Remove Guild Member Role](https://discordapp.com/developers/docs/resources/guild#remove-guild-member-role)

### getRoles

```cpp
ArrayResponse<Role> getRoles(Snowflake<Server> serverID);
```

Gets all roles in a server

#### Parameters
<table>
  <tbody>
      <tr><td><strong>serverID</strong></td>
        <td>The id of the server you want to get the roles from</td></tr>
  </tbody>
</table>

#### Return value
Returns an array of ``Role`` objects

#### Other Details
[Declared in `client.h`](https://github.com/NoNamer64/sleepy-discord/blob/master/include/sleepy_discord/client.h) and [defined in `endpoints.cpp`](https://github.com/yourWaifu/sleepy-discord/blob/master/sleepy_discord/endpoints.cpp)

Uses [Get Guild Roles](https://discordapp.com/developers/docs/resources/guild#get-guild-roles)

### createRole

```cpp
ObjectResponse<Role> createRole(Snowflake<Server> serverID, std::string name = "", Permission permissions = NONE, unsigned int color = 0, bool hoist = false, bool mentionable = false);
```

Creates a new role in server

#### Parameters
<table>
  <tbody>
      <tr><td><strong>serverID</strong></td>
        <td>The id of the server you create a new role for</td></tr>
      <tr><td><strong>name</strong></td>
        <td>The name of the role you want to create</td></tr>
      <tr><td><strong>permissions</strong></td>
        <td>The bitwise permissions of the role you want to create</td></tr>
      <tr><td><strong>color</strong></td>
        <td>The RGB color of the role you want to create</td></tr>
      <tr><td><strong>hoist</strong></td>
        <td>Whether the role should be displayed separately in the sidebar</td></tr>
      <tr><td><strong>mentionable</strong></td>
        <td>Whether the role should be mentionable</td></tr>
  </tbody>
</table>

#### Return value
Returns an ``Role`` object

#### Other Details
[Declared in `client.h`](https://github.com/NoNamer64/sleepy-discord/blob/master/include/sleepy_discord/client.h) and [defined in `endpoints.cpp`](https://github.com/yourWaifu/sleepy-discord/blob/master/sleepy_discord/endpoints.cpp)

Uses [Create Guild Role](https://discordapp.com/developers/docs/resources/guild#create-guild-role)

### editRolePosition

```cpp
ArrayResponse<Role> editRolePosition(Snowflake<Server> serverID, std::vector<std::pair<std::string, uint64_t>> positions);
```

Changes the positions of the given roles

#### Parameters
<table>
  <tbody>
      <tr><td><strong>serverID</strong></td>
        <td>The id of the server you create a new role for</td></tr>
      <tr><td><strong>positions</strong></td>
        <td>An array of channel id's and sorting positions of the roles</td></tr>
  </tbody>
</table>

#### Return value
Returns an ``Role`` object

#### Other Details
[Declared in `client.h`](https://github.com/NoNamer64/sleepy-discord/blob/master/include/sleepy_discord/client.h) and [defined in `endpoints.cpp`](https://github.com/yourWaifu/sleepy-discord/blob/master/sleepy_discord/endpoints.cpp)

Uses [Modify Guild Role Positions](https://discordapp.com/developers/docs/resources/guild#modify-guild-role-positions)

### editRole

```cpp
std::string editRole(Snowflake<Server> serverID, Snowflake<Role> roleID, std::string name = "", Permission permissions = NONE, uint32_t color = 1 << 24, uint8_t hoist = 2, uint8_t mentionable = 2);
```

Changes the given role

#### Parameters
<table>
  <tbody>
      <tr><td><strong>serverID</strong></td>
        <td>The id of the server you create a new role for</td></tr>
      <tr><td><strong>name</strong></td>
        <td>The name of the role you want to create</td></tr>
      <tr><td><strong>permissions</strong></td>
        <td>The bitwise permissions of the role you want to create</td></tr>
      <tr><td><strong>color</strong></td>
        <td>The RGB color of the role you want to create</td></tr>
      <tr><td><strong>hoist</strong></td>
        <td>Whether the role should be displayed separately in the sidebar</td></tr>
      <tr><td><strong>mentionable</strong></td>
        <td>Whether the role should be mentionable</td></tr>
  </tbody>
</table>

#### Return value
Returns an ``Role`` object

#### Other Details
[Declared in `client.h`](https://github.com/NoNamer64/sleepy-discord/blob/master/include/sleepy_discord/client.h) and [defined in `endpoints.cpp`](https://github.com/yourWaifu/sleepy-discord/blob/master/sleepy_discord/endpoints.cpp)

Uses [Modify Guild Role Positions](https://discordapp.com/developers/docs/resources/guild#modify-guild-role-positions)

### deleteRole

```cpp
bool deleteRole(Snowflake<Server> serverID, Snowflake<Role> roleID);
```

Deletes the given role from a server

#### Parameters
<table>
  <tbody>
      <tr><td><strong>serverID</strong></td>
        <td>The id of the server you want to delete the role from</td></tr>
      <tr><td><strong>roleID</strong></td>
        <td>The id of the role that you want to remove</td></tr>
  </tbody>
</table>

#### Return value
Returns ``true`` on succes

#### Other Details
[Declared in `client.h`](https://github.com/NoNamer64/sleepy-discord/blob/master/include/sleepy_discord/client.h) and [defined in `endpoints.cpp`](https://github.com/yourWaifu/sleepy-discord/blob/master/sleepy_discord/endpoints.cpp)

Uses [Delete Guild Role](https://discordapp.com/developers/docs/resources/guild#delete-guild-role)

### kickMember

```cpp
bool kickMember(Snowflake<Server> serverID, Snowflake<User> userID);
```

Removes a member from a server

#### Parameters
<table>
  <tbody>
      <tr><td><strong>serverID</strong></td>
        <td>The id of the server with the user you want to remove</td></tr>
      <tr><td><strong>userID</strong></td>
        <td>The id of the user that you want to remove</td></tr>
  </tbody>
</table>

#### Return value
Returns ``true`` on success

#### Other Details
[Declared in `client.h`](https://github.com/NoNamer64/sleepy-discord/blob/master/include/sleepy_discord/client.h) and [defined in `endpoints.cpp`](https://github.com/yourWaifu/sleepy-discord/blob/master/sleepy_discord/endpoints.cpp)

Uses [Remove Guild Member](https://discordapp.com/developers/docs/resources/guild#remove-guild-member)

### pruneMembers

```cpp
void pruneMembers(Snowflake<Server> serverID, const unsigned int numOfDays);
```

Kicks all members of a server who have not been online for more than the specified number of days

#### Parameters
<table>
  <tbody>
      <tr><td><strong>serverID</strong></td>
        <td>The id of the server with the user you want to prune members from</td></tr>
      <tr><td><strong>numOfDays</strong></td>
        <td>The number of days ago a member must have been last online on the server</td></tr>
  </tbody>
</table>

#### Other Details
[Declared in `client.h`](https://github.com/NoNamer64/sleepy-discord/blob/master/include/sleepy_discord/client.h) and [defined in `endpoints.cpp`](https://github.com/yourWaifu/sleepy-discord/blob/master/sleepy_discord/endpoints.cpp)

Uses [Begin Guild Prune](https://discordapp.com/developers/docs/resources/guild#begin-guild-prune)

### banMember

```cpp
bool banMember(Snowflake<Server> serverID, Snowflake<User> userID);
```

Bans a member from a server

#### Parameters
<table>
  <tbody>
    <tr><td><strong>serverID</strong></td>
      <td>The id of the server with the user you want to ban</td></tr>
    <tr><td><strong>userID</strong></td>
      <td>The id of the user that you want to ban</td></tr>
  </tbody>
</table>

#### Return value
Returns ``true`` on success

#### Other Details
[Declared in `client.h`](https://github.com/NoNamer64/sleepy-discord/blob/master/include/sleepy_discord/client.h) and [defined in `endpoints.cpp`](https://github.com/yourWaifu/sleepy-discord/blob/master/sleepy_discord/endpoints.cpp)

Uses [Create Guild Ban](https://discordapp.com/developers/docs/resources/guild#create-guild-ban)

### unbanMember

```cpp
bool unbanMember(Snowflake<Server> serverID, Snowflake<User> userID);
```

Unbans a member from a server

#### Parameters
<table>
  <tbody>
    <tr><td><strong>serverID</strong></td>
      <td>The id of the server with the user you want to unban</td></tr>
    <tr><td><strong>userID</strong></td>
      <td>The id of the user that you want to unban</td></tr>
  </tbody>
</table>

#### Return value
Returns ``true`` on success

#### Other Details
[Declared in `client.h`](https://github.com/NoNamer64/sleepy-discord/blob/master/include/sleepy_discord/client.h) and [defined in `endpoints.cpp`](https://github.com/yourWaifu/sleepy-discord/blob/master/sleepy_discord/endpoints.cpp)

Uses [Remove Guild Ban](https://discordapp.com/developers/docs/resources/guild#remove-guild-ban)

### getBans

```cpp
ArrayResponse<User> getBans(Snowflake<Server> serverID);
```

Gets all bans in a server

#### Parameters
<table>
  <tbody>
    <tr><td><strong>serverID</strong></td>
      <td>The id of the server you want to get the bans from</td></tr>
  </tbody>
</table>

#### Return value
Returns an array of ``User`` objects

#### Other Details
[Declared in `client.h`](https://github.com/NoNamer64/sleepy-discord/blob/master/include/sleepy_discord/client.h) and [defined in `endpoints.cpp`](https://github.com/yourWaifu/sleepy-discord/blob/master/sleepy_discord/endpoints.cpp)

Uses [Get Guild Bans](https://discordapp.com/developers/docs/resources/guild#get-guild-bans)

### getServers

```cpp
ArrayResponse<Server> getServers();
```

Gets all servers where the current user is in

#### Return value
Returns an array of ``Server`` objects

#### Other Details
[Declared in `client.h`](https://github.com/NoNamer64/sleepy-discord/blob/master/include/sleepy_discord/client.h) and [defined in `endpoints.cpp`](https://github.com/yourWaifu/sleepy-discord/blob/master/sleepy_discord/endpoints.cpp)

Uses [Get Current User Guilds](https://discordapp.com/developers/docs/resources/user#get-current-user-guilds)

### getServer

```cpp
ObjectResponse<Server> getServer(Snowflake<Server> serverID);
```

Gets a server object from a serverID

#### Parameters
<table>
  <tbody>
    <tr><td><strong>serverID</strong></td>
      <td>The id of the server you want to get</td></tr>
  </tbody>
</table>

#### Return value
Returns a ``Server`` object

#### Other Details
[Declared in `client.h`](https://github.com/NoNamer64/sleepy-discord/blob/master/include/sleepy_discord/client.h) and [defined in `endpoints.cpp`](https://github.com/yourWaifu/sleepy-discord/blob/master/sleepy_discord/endpoints.cpp)

Uses [Get Guild](https://discordapp.com/developers/docs/resources/guild#get-guild)

### leaveServer

```cpp
bool leaveServer(Snowflake<Server> serverID);
```

Removes the current user from a server

#### Parameters
<table>
  <tbody>
    <tr><td><strong>serverID</strong></td>
      <td>The id of the server you want to remove the current user from</td></tr>
  </tbody>
</table>

#### Return value
Returns ``true`` on success

#### Other Details
[Declared in `client.h`](https://github.com/NoNamer64/sleepy-discord/blob/master/include/sleepy_discord/client.h) and [defined in `endpoints.cpp`](https://github.com/yourWaifu/sleepy-discord/blob/master/sleepy_discord/endpoints.cpp)

Uses [Leave Guild](https://discordapp.com/developers/docs/resources/user#leave-guild)

### getChannel

```cpp
ObjectResponse<Channel> getChannel(Snowflake<Channel> channelID);
```

Get a channel object from a channelID

#### Parameters
<table>
  <tbody>
    <tr><td><strong>channelID</strong></td>
      <td>The id of the channel you want to get</td></tr>
  </tbody>
</table>

#### Return value
Returns a ``Channel`` object

#### Other Details
[Declared in `client.h`](https://github.com/NoNamer64/sleepy-discord/blob/master/include/sleepy_discord/client.h) and [defined in `endpoints.cpp`](https://github.com/yourWaifu/sleepy-discord/blob/master/sleepy_discord/endpoints.cpp)

Uses [Get Channel](https://discordapp.com/developers/docs/resources/channel#get-channel)

### editChannel

```cpp
ObjectResponse<Channel> editChannel(Snowflake<Channel> channelID, std::string name = "", std::string topic = "");
```

Changes the channel name and topic

#### Parameters
<table>
  <tbody>
    <tr><td><strong>channelID</strong></td>
      <td>The id of the channel you want to edit</td></tr>
    <tr><td><strong>name</strong></td>
      <td>The new name for the channel</td></tr>
    <tr><td><strong>topic</strong></td>
      <td>The new topic for the channel</td></tr>
  </tbody>
</table>

#### Return value
Returns a ``Channel`` object

#### Other Details
[Declared in `client.h`](https://github.com/NoNamer64/sleepy-discord/blob/master/include/sleepy_discord/client.h) and [defined in `endpoints.cpp`](https://github.com/yourWaifu/sleepy-discord/blob/master/sleepy_discord/endpoints.cpp)

Uses [Modify Channel](https://discordapp.com/developers/docs/resources/channel#modify-channel)

### editChannelName
```cpp
ObjectResponse<Channel> editChannelName(Snowflake<Channel> channelID, std::string name);
```

Edit the channel name and return a Channel object of that channel

#### Parameters
<table>
  <tbody>
    <tr><td><strong>channelID</td>
      <td>The id of the channel you want to edit</td></tr>
    <tr><td><strong>name</td>
      <td>The new name of the channel</td></tr>
  </tbody>
</table>

#### Return value
Return a ``Channel`` object

#### Other Details
[Declared in `client.h`](https://github.com/NoNamer64/sleepy-discord/blob/master/include/sleepy_discord/client.h) and [defined in `endpoints.cpp`](https://github.com/yourWaifu/sleepy-discord/blob/master/sleepy_discord/endpoints.cpp)

Calls [editChannel](#editchannel)

### editChannelTopic
```cpp
ObjectResponse<Channel> editChannelTopic(Snowflake<Channel> channelID, std::string topic);
```

Changes the channel topic

#### Parameters
<table>
  <tbody>
    <tr><td><strong>channelID</td>
      <td>The id of the channel you want to edit</td></tr>
    <tr><td><strong>topic</td>
      <td>The new topic of the channel</td></tr>
  </tbody>
</table>

#### Return value
Returns a ``Channel`` object

#### Other Details
[Declared in `client.h`](https://github.com/NoNamer64/sleepy-discord/blob/master/include/sleepy_discord/client.h) and [defined in `endpoints.cpp`](https://github.com/yourWaifu/sleepy-discord/blob/master/sleepy_discord/endpoints.cpp)

Calls [editChannel](#editchannel)

### editChannelPermissions
```cpp
bool editChannelPermissions(Snowflake<Channel> channelID, std::string ID, int allow, int deny, std::string type);
```
```cpp
#include <sleepy_discord.h>

class myDiscordClient : public SleepyDiscord::DiscordClient {
public:
	using SleepyDiscord::DiscordClient::DiscordClient;

	void onMessage(SleepyDiscord::Message message) override {
		editChannelPermissions(message.channelID, message.author.ID, 0, 2048, "member"); // Denies the member who sent the message permission to send messages
	}
}

int main() {
	myDiscordClient client("token", 2);
	client.run();

	return 0;
}
```


Changes the channel permission overwrites for a user or role in a channel

#### Parameters
<table>
  <tbody>
    <tr><td><strong>channelID</td>
      <td>The id of the channel you want to edit the permissions of</td></tr>
    <tr><td><strong>ID</td>
      <td>The overwrite id you want to edit</td></tr>
    <tr><td><strong>allow</td>
      <td>The bitwise value of all allowed permissions</td></tr>
    <tr><td><strong>deny</td>
      <td>The bitwise value of all denied permissions</td></tr>
    <tr><td><strong>type</td>
      <td>The type you want to edit, either "member" or "role"</td></tr>
  </tbody>
</table>

#### Return value
Returns ``true`` on success

#### Other Details
[Declared in `client.h`](https://github.com/NoNamer64/sleepy-discord/blob/master/include/sleepy_discord/client.h) and [defined in `endpoints.cpp`](https://github.com/yourWaifu/sleepy-discord/blob/master/sleepy_discord/endpoints.cpp)

Uses [Edit Channel Permissions](https://discordapp.com/developers/docs/resources/channel#edit-channel-permissions)

### removeChannelPermission
```cpp
bool removeChannelPermission(Snowflake<Channel> channelID, std::string ID);
```

Removes a channel permission overwrite for a user or role in a channel

#### Parameters
<table>
  <tbody>
    <tr><td><strong>channelID</td>
      <td>The id of the channel you want to remove the permissions from</td></tr>
    <tr><td><strong>ID</td>
      <td>The overwrite id you want to remove</td></tr>
  </tbody>
</table>

#### Return value
Returns ``true`` on success

#### Other Details
[Declared in `client.h`](https://github.com/NoNamer64/sleepy-discord/blob/master/include/sleepy_discord/client.h) and [defined in `endpoints.cpp`](https://github.com/yourWaifu/sleepy-discord/blob/master/sleepy_discord/endpoints.cpp)

Uses [Delete Channel Permission](https://discordapp.com/developers/docs/resources/channel#delete-channel-permission)

### deleteChannelPermission
```cpp
bool deleteChannelPermission(Snowflake<Channel> channelID, std::string ID);
```

See [removeChannelPermission]

### deleteChannel
```cpp
ObjectResponse<Channel> deleteChannel(Snowflake<Channel> channelID);
```

Deletes a channel and return

#### Parameters
<table>
  <tbody>
    <tr><td><strong>channelID</td>
      <td>The id of the channel you want to delete</td></tr>
  </tbody>
</table>

#### Return value
Returns a ``Channel`` object

#### Other Details
[Declared in `client.h`](https://github.com/NoNamer64/sleepy-discord/blob/master/include/sleepy_discord/client.h) and [defined in `endpoints.cpp`](https://github.com/yourWaifu/sleepy-discord/blob/master/sleepy_discord/endpoints.cpp)

Uses [Delete/Close Channel](https://discordapp.com/developers/docs/resources/channel#deleteclose-channel)

### deleteServer

```cpp
ObjectResponse<Server> deleteServer(Snowflake<Server> serverID);
```

Deletes a server from a server id

#### Parameters
<table>
  <tbody>
    <tr><td><strong>serverID</strong></td>
      <td>The id of the server you want to delete</td></tr>
  </tbody>
</table>

#### Return value
Returns a ``Server`` object

#### Other Details
[Declared in `client.h`](https://github.com/NoNamer64/sleepy-discord/blob/master/include/sleepy_discord/client.h) and [defined in `endpoints.cpp`](https://github.com/yourWaifu/sleepy-discord/blob/master/sleepy_discord/endpoints.cpp)

Uses [Delete Guild](https://discordapp.com/developers/docs/resources/guild#delete-guild)

### getMember

```cpp
ObjectResponse<ServerMember> getMember(Snowflake<Server> serverID, Snowflake<User> userID);
```

Gets a member for a user id in a server

#### Parameters
<table>
  <tbody>
    <tr><td><strong>serverID</strong></td>
      <td>The id of the server you want to get the member from</td></tr>
    <tr><td><strong>userID</strong></td>
      <td>The id of the user you want to get the member for</td></tr>
  </tbody>
</table>

#### Return value
Returns a ``ServerMember`` object

#### Other Details
[Declared in `client.h`](https://github.com/NoNamer64/sleepy-discord/blob/master/include/sleepy_discord/client.h) and [defined in `endpoints.cpp`](https://github.com/yourWaifu/sleepy-discord/blob/master/sleepy_discord/endpoints.cpp)

Uses [Get Guild Member](https://discordapp.com/developers/docs/resources/guild#get-guild-member)

### listMembers

```cpp
ArrayResponse<ServerMember> listMembers(Snowflake<Server> serverID, uint16_t limit, std::string after);
```

Gets an array of members in a server

#### Parameters
<table>
  <tbody>
    <tr><td><strong>serverID</strong></td>
      <td>The id of the server you want to get the members from</td></tr>
    <tr><td><strong>limit</strong></td>
      <td>The maximum number of members to get</td></tr>
    <tr><td><strong>after</strong></td>
      <td>The highest user id in the previous page</td></tr>
  </tbody>
</table>

#### Return value
Returns an array of ``ServerMember`` objects

#### Other Details
[Declared in `client.h`](https://github.com/NoNamer64/sleepy-discord/blob/master/include/sleepy_discord/client.h) and [defined in `endpoints.cpp`](https://github.com/yourWaifu/sleepy-discord/blob/master/sleepy_discord/endpoints.cpp)

Uses [List Guild Members](https://discordapp.com/developers/docs/resources/guild#list-guild-members)

### addMember

```cpp
ObjectResponse<ServerMember> addMember(Snowflake<Server> serverID, Snowflake<User> userID, std::string accesToken, std::string nick = "", std::vector<Role> roles = {}, bool mute = false, bool deaf = false);
```

Adds a member to the server

#### Parameters
<table>
  <tbody>
    <tr><td><strong>serverID</strong></td>
      <td>The id of the server you want to add the member to</td></tr>
    <tr><td><strong>userID</strong></td>
      <td>The id of the user you want to add to the server</td></tr>
    <tr><td><strong>accesToken</strong></td>
      <td>The acces token granted with the guilds.join used to add a user</td></tr>
    <tr><td><strong>nick</strong></td>
      <td>The nickname of the user you want to add to the server</td></tr>
    <tr><td><strong>roles</strong></td>
      <td>The roles of the user you want to add to the server</td></tr>
    <tr><td><strong>mute</strong></td>
      <td>Whether the user you want to add to the server is muted</td></tr>
    <tr><td><strong>deaf</strong></td>
      <td>Whether the user you want to add to the server is deafened</td></tr>
  </tbody>
</table>

#### Return value
Returns a ``ServerMember`` object of the added user

#### Other Details
[Declared in `client.h`](https://github.com/NoNamer64/sleepy-discord/blob/master/include/sleepy_discord/client.h) and [defined in `endpoints.cpp`](https://github.com/yourWaifu/sleepy-discord/blob/master/sleepy_discord/endpoints.cpp)

Uses [Add Guild Member](https://discordapp.com/developers/docs/resources/guild#add-guild-member)

### getChannelInvites

```cpp
ArrayResponse<Invite> getChannelInvites(Snowflake<Channel> channelID);
```

Gets an array of all the invites from a channel id

#### Parameters
<table>
  <tbody>
    <tr><td><strong>channelID</strong></td>
      <td>The id of the channel you want to get the invites from</td></tr>
  </tbody>
</table>

#### Return value
Returns an array of ``Invite`` objects

#### Other Details
[Declared in `client.h`](https://github.com/NoNamer64/sleepy-discord/blob/master/include/sleepy_discord/client.h) and [defined in `endpoints.cpp`](https://github.com/yourWaifu/sleepy-discord/blob/master/sleepy_discord/endpoints.cpp)

Uses [Get Channel Invites](https://discordapp.com/developers/docs/resources/channel#get-channel-invite)

### createChannelInvite

```cpp
ObjectResponse<Invite> createChannelInvite(Snowflake<Channel> channelID, const uint64_t maxAge = 0, const uint64_t maxUses = 0, const bool temporary = false, const bool unique = false);
```

Creates an invite for a channel

#### Parameters
<table>
  <tbody>
    <tr><td><strong>channelID</strong></td>
      <td>The id of the channel you want to get the invites from</td></tr>
    <tr><td><strong>maxAge</strong></td>
      <td>The duration of the invite before it expires in seconds, 0 for never</td></tr>
    <tr><td><strong>maxUses</strong></td>
      <td>The maximum number of uses for the invite, 0 for unlimited</td></tr>
    <tr><td><strong>temporary</strong></td>
      <td>Whether the invite grants temporary acces</td></tr>
    <tr><td><strong>unique</strong></td>
      <td>Whether the invite allows to use similar invites, for one time use invites</td></tr>
  </tbody>
</table>

#### Return value
Returns the ``Invite`` object

#### Other Details
[Declared in `client.h`](https://github.com/NoNamer64/sleepy-discord/blob/master/include/sleepy_discord/client.h) and [defined in `endpoints.cpp`](https://github.com/yourWaifu/sleepy-discord/blob/master/sleepy_discord/endpoints.cpp)

Uses [Get Channel Invites](https://discordapp.com/developers/docs/resources/channel#get-channel-invite)

### getServerChannels

```cpp
ArrayResponse<Channel> GetServerChannels(Snowflake<Server> serverID);
```

Gets all channels in a server

#### Parameters
<table>
  <tbody>
    <tr><td><strong>serverID</strong></td>
      <td>The id of the server you want to get the channels from</td></tr>
  </tbody>
</table>

#### Return value
Returns an array of ``Channel`` objects

#### Other Details
[Declared in `client.h`](https://github.com/NoNamer64/sleepy-discord/blob/master/include/sleepy_discord/client.h) and [defined in `endpoints.cpp`](https://github.com/yourWaifu/sleepy-discord/blob/master/sleepy_discord/endpoints.cpp)

Uses [Get Guild Channels](https://discordapp.com/developers/docs/resources/guild#get-guild-channels)

### createTextChannel

```cpp
ObjectResponse<Channel> createTextChannel(Snowflake<Server> serverID, std::string name);
```

Creates a new text channel

#### Parameters
<table>
  <tbody>
    <tr><td><strong>serverID</strong></td>
      <td>The id of the server you want to add the channel to</td></tr>
    <tr><td><strong>name</strong></td>
      <td>The name of the channel</td></tr>
  </tbody>
</table>

#### Return value
Returns the ``Channel`` object

#### Other Details
[Declared in `client.h`](https://github.com/NoNamer64/sleepy-discord/blob/master/include/sleepy_discord/client.h) and [defined in `endpoints.cpp`](https://github.com/yourWaifu/sleepy-discord/blob/master/sleepy_discord/endpoints.cpp)

Uses [Create Guild Channel](https://discordapp.com/developers/docs/resources/guild#create-guild-channel)

### editChannelPositions

```cpp
ArrayResponse<Channel> editChannelPositions(Snowflake<Server> serverID, std::vector<std::pair<std::string, uint64_t>> positions);
```

Changes the positions of the given channels

#### Parameters
<table>
  <tbody>
    <tr><td><strong>serverID</strong></td>
      <td>The id of the server you want to edit the channel positions on</td></tr>
    <tr><td><strong>positions</strong></td>
      <td>An array of channel id's and sorting positions of the channels</td></tr>
  </tbody>
</table>

#### Return value
Returns an array of ``Channel`` objects

#### Other Details
[Declared in `client.h`](https://github.com/NoNamer64/sleepy-discord/blob/master/include/sleepy_discord/client.h) and [defined in `endpoints.cpp`](https://github.com/yourWaifu/sleepy-discord/blob/master/sleepy_discord/endpoints.cpp)

Uses [Modify Guild Channel Positions](https://discordapp.com/developers/docs/resources/guild#modify-guild-channel-positions)

### getServerInvites

```cpp
ArrayResponse<Invite> getServerInvites(Snowflake<Server> serverID);
```

Gets all invites from a server

#### Parameters
<table>
  <tbody>
    <tr><td><strong>serverID</strong></td>
      <td>The id of the server you want to get the invites from</td></tr>
  </tbody>
</table>

#### Return value
Returns an array of ``Invite`` objects

#### Other Details
[Declared in `client.h`](https://github.com/NoNamer64/sleepy-discord/blob/master/include/sleepy_discord/client.h) and [defined in `endpoints.cpp`](https://github.com/yourWaifu/sleepy-discord/blob/master/sleepy_discord/endpoints.cpp)

Uses [Get Guild Invites](https://discordapp.com/developers/docs/resources/guild#get-guild-invites)

### getInvite

```cpp
ObjectResponse<Invite> getInvite(std::string inviteCode);
```

Gets an invite from an invite code

#### Parameters
<table>
  <tbody>
    <tr><td><strong>inviteCode</strong></td>
      <td>The invite code you want to get the invite from</td></tr>
  </tbody>
</table>

#### Return value
Returns an ``Invite`` object

#### Other Details
[Declared in `client.h`](https://github.com/NoNamer64/sleepy-discord/blob/master/include/sleepy_discord/client.h) and [defined in `endpoints.cpp`](https://github.com/yourWaifu/sleepy-discord/blob/master/sleepy_discord/endpoints.cpp)

Uses [Get Invite](https://discordapp.com/developers/docs/resources/guild#get-invite)

### deleteInvite

```cpp
ObjectResponse<Invite> deleteInvite(std::string inviteCode);
```

Deletes an invite from an invite code

#### Parameters
<table>
  <tbody>
    <tr><td><strong>inviteCode</strong></td>
      <td>The invite code you want to delete the invite from</td></tr>
  </tbody>
</table>

#### Return value
Returns the deleted ``Invite`` object

#### Other Details
[Declared in `client.h`](https://github.com/NoNamer64/sleepy-discord/blob/master/include/sleepy_discord/client.h) and [defined in `endpoints.cpp`](https://github.com/yourWaifu/sleepy-discord/blob/master/sleepy_discord/endpoints.cpp)

Uses [Delete Invite](https://discordapp.com/developers/docs/resources/guild#delete-invite)

### getIntegrations

```cpp
std::string getIntegrations(Snowflake<Server> serverID);
```

Gets all integrations in a server

#### Parameters
<table>
  <tbody>
    <tr><td><strong>serverID</strong></td>
      <td>The id of the server you want to get the integrations from</td></tr>
  </tbody>
</table>

#### Return value
Returns a JSON string of the integration objects

#### Other Details
[Declared in `client.h`](https://github.com/NoNamer64/sleepy-discord/blob/master/include/sleepy_discord/client.h) and [defined in `endpoints.cpp`](https://github.com/yourWaifu/sleepy-discord/blob/master/sleepy_discord/endpoints.cpp)

Uses [Get Guild Integrations](https://discordapp.com/developers/docs/resources/guild#get-guild-integrations)

### createIntegration

```cpp
bool createIntegration(Snowflake<Server> serverID, std::string type, std::string integrationID);
```

Creates an integration in a server

#### Parameters
<table>
  <tbody>
    <tr><td><strong>serverID</strong></td>
      <td>The id of the server you want to create an integration for</td></tr>
    <tr><td><strong>type</strong></td>
      <td>The type of integration you want to create</td></tr>
    <tr><td><strong>integrationID</strong></td>
      <td>The id of the integration you want to create</td></tr>
  </tbody>
</table>

#### Return value
Returns ``true`` on success

#### Other Details
[Declared in `client.h`](https://github.com/NoNamer64/sleepy-discord/blob/master/include/sleepy_discord/client.h) and [defined in `endpoints.cpp`](https://github.com/yourWaifu/sleepy-discord/blob/master/sleepy_discord/endpoints.cpp)

Uses [Create Guild Integration](https://discordapp.com/developers/docs/resources/guild#create-guild-integration)

### editIntergration

```cpp
bool editIntergration(Snowflake<Server> serverID, std::string integrationID, int expireBegavior, int expireGracePeriod, bool enbleEmoticons);
```

Changes an integration in a server

#### Parameters
<table>
  <tbody>
    <tr><td><strong>serverID</strong></td>
      <td>The id of the server you want to change the integration in</td></tr>
    <tr><td><strong>integrationID</strong></td>
      <td>The id of the integration you want to change</td></tr>
    <tr><td><strong>expireBegavior</strong></td>
      <td>The behavoir when an integration subscription expires</td></tr>
    <tr><td><strong>expireGracePeriod</strong></td>
      <td>The period in seconds where the integration will ignore expired subscriptions</td></tr>
    <tr><td><strong>enbleEmoticons</strong></td>
      <td>Whether you want emoticons to be sunced for this integration</td></tr>
  </tbody>
</table>

#### Return value
Returns ``true`` on success

#### Other Details
[Declared in `client.h`](https://github.com/NoNamer64/sleepy-discord/blob/master/include/sleepy_discord/client.h) and [defined in `endpoints.cpp`](https://github.com/yourWaifu/sleepy-discord/blob/master/sleepy_discord/endpoints.cpp)

Uses [Modify Guild Integration](https://discordapp.com/developers/docs/resources/guild#modify-guild-integration)

### deleteIntegration

```cpp
bool deleteIntegration(Snowflake<Server> serverID, std::string integrationID);
```

Deletes an integration in a server

#### Parameters
<table>
  <tbody>
    <tr><td><strong>serverID</strong></td>
      <td>The id of the server you want to delete the integration from</td></tr>
    <tr><td><strong>integrationID</strong></td>
      <td>The id of the integration you want to delete</td></tr>
  </tbody>
</table>

#### Return value
Returns ``true`` on success

#### Other Details
[Declared in `client.h`](https://github.com/NoNamer64/sleepy-discord/blob/master/include/sleepy_discord/client.h) and [defined in `endpoints.cpp`](https://github.com/yourWaifu/sleepy-discord/blob/master/sleepy_discord/endpoints.cpp)

Uses [Delete Guild Integration](https://discordapp.com/developers/docs/resources/guild#delete-guild-integration)

### syncIntegration

```cpp
bool syncIntegration(Snowflake<Server> serverID, std::string integrationID);
```

Syncs an integration in a server

#### Parameters
<table>
  <tbody>
    <tr><td><strong>serverID</strong></td>
      <td>The id of the server you want to sync the integration in</td></tr>
    <tr><td><strong>integrationID</strong></td>
      <td>The id of the integration you want to sync</td></tr>
  </tbody>
</table>

#### Return value
Returns ``true`` on success

#### Other Details
[Declared in `client.h`](https://github.com/NoNamer64/sleepy-discord/blob/master/include/sleepy_discord/client.h) and [defined in `endpoints.cpp`](https://github.com/yourWaifu/sleepy-discord/blob/master/sleepy_discord/endpoints.cpp)

Uses [Sync Guild Integration](https://discordapp.com/developers/docs/resources/guild#sync-guild-integration)

### getServerEmbed

```cpp
ObjectResponse<ServerEmbed> getServerEmbed(Snowflake<Server> serverID);
```

Gets a server embed from a server

#### Parameters
<table>
  <tbody>
    <tr><td><strong>serverID</strong></td>
      <td>The id of the server you want to get the embed from</td></tr>
  </tbody>
</table>

#### Return value
Returns a ``ServerEmbed`` object

#### Other Details
[Declared in `client.h`](https://github.com/NoNamer64/sleepy-discord/blob/master/include/sleepy_discord/client.h) and [defined in `endpoints.cpp`](https://github.com/yourWaifu/sleepy-discord/blob/master/sleepy_discord/endpoints.cpp)

Uses [Get Guild Embed](https://discordapp.com/developers/docs/resources/guild#get-guild-embed)


### createWebhook

```cpp
ObjectResponse<Webhook> createWebhook(Snowflake<Channel> channelID, std::string name, std::string avatar = "");
```

Creates a webhook in a channel

#### Parameters
<table>
  <tbody>
    <tr><td><strong>channelID</strong></td>
      <td>The id of the channel you want to create a webhook for</td></tr>
    <tr><td><strong>name</strong></td>
      <td>The name of the webhook</td></tr>
    <tr><td><strong>avatar</strong></td>
      <td>The avatar of the webhook</td></tr>
  </tbody>
</table>

#### Return value
Returns a ``Webhook`` object

#### Other Details
[Declared in `client.h`](https://github.com/NoNamer64/sleepy-discord/blob/master/include/sleepy_discord/client.h) and [defined in `endpoints.cpp`](https://github.com/yourWaifu/sleepy-discord/blob/master/sleepy_discord/endpoints.cpp)

Uses [Create Webhook](https://discordapp.com/developers/docs/resources/webhook#create-webhook)

### getChannelWebhooks

```cpp
ArrayResponse<Webhook> getChannelWebhooks(Snowflake<Channel> channelID);
```

Gets all the webhooks in a channel

#### Parameters
<table>
  <tbody>
    <tr><td><strong>channelID</strong></td>
      <td>The id of the channel you want to get the webhooks from</td></tr>
  </tbody>
</table>

#### Return value
Returns an array of ``Webhook`` objects

#### Other Details
[Declared in `client.h`](https://github.com/NoNamer64/sleepy-discord/blob/master/include/sleepy_discord/client.h) and [defined in `endpoints.cpp`](https://github.com/yourWaifu/sleepy-discord/blob/master/sleepy_discord/endpoints.cpp)

Uses [Get Channel Webhooks](https://discordapp.com/developers/docs/resources/webhook#get-channel-webhooks)

### getServerWebhooks

```cpp
ArrayResponse<Webhook> getServerWebhooks(Snowflake<Server> serverID);
```

Gets all the webhooks in a server

#### Parameters
<table>
  <tbody>
    <tr><td><strong>serverID</strong></td>
      <td>The id of the server you want to get the webhooks from</td></tr>
  </tbody>
</table>

#### Return value
Returns an array of ``Webhook`` objects

#### Other Details
[Declared in `client.h`](https://github.com/NoNamer64/sleepy-discord/blob/master/include/sleepy_discord/client.h) and [defined in `endpoints.cpp`](https://github.com/yourWaifu/sleepy-discord/blob/master/sleepy_discord/endpoints.cpp)

Uses [Get Guild Webhooks](https://discordapp.com/developers/docs/resources/webhook#get-guild-webhooks)

### getWebhook

```cpp
ObjectResponse<Webhook> getWebhook(Snowflake<Webhook> webhookID, std::string webhookToken = "");
```

Gets a webhook with an optional webhook token

#### Parameters
<table>
  <tbody>
    <tr><td><strong>webhookID</strong></td>
      <td>The id of the webhook you want to get</td></tr>
    <tr><td><strong>webhookToken</strong></td>
      <td>The optional token of the webhook you want to get</td></tr>
  </tbody>
</table>

#### Return value
Returns a ``Webhook`` object

#### Other Details
[Declared in `client.h`](https://github.com/NoNamer64/sleepy-discord/blob/master/include/sleepy_discord/client.h) and [defined in `endpoints.cpp`](https://github.com/yourWaifu/sleepy-discord/blob/master/sleepy_discord/endpoints.cpp)

Uses [Get Webhook](https://discordapp.com/developers/docs/resources/webhook#get-webhook)
Uses [Get Webhook with Token](https://discordapp.com/developers/docs/resources/webhook#get-webhook-with-token)

### editWebhook

```cpp
ObjectResponse<Webhook> editWebhook(Snowflake<Webhook> webhookID, std::string webhookToken = "", std::string name = "", std::string avatar = "");
```

Changes the name and avatar of a webhook with an optional webhook token

#### Parameters
<table>
  <tbody>
    <tr><td><strong>webhookID</strong></td>
      <td>The id of the webhook you want to edit</td></tr>
      <tr><td><strong>webhookToken</strong></td>
        <td>The optional token of the webhook you want to get</td></tr>
      <tr><td><strong>name</strong></td>
        <td>The new name of the channel</td></tr>
      <tr><td><strong>avatar</strong></td>
        <td>The new avatar of the channel</td></tr>
  </tbody>
</table>

#### Return value
Returns a ``Webhook`` object

#### Other Details
[Declared in `client.h`](https://github.com/NoNamer64/sleepy-discord/blob/master/include/sleepy_discord/client.h) and [defined in `endpoints.cpp`](https://github.com/yourWaifu/sleepy-discord/blob/master/sleepy_discord/endpoints.cpp)

Uses [Modify Webhook](https://discordapp.com/developers/docs/resources/webhook#modify-webhook)
Uses [Modify Webhook with Token](https://discordapp.com/developers/docs/resources/webhook#modify-webhook-with-token)

### deleteWebhook

```cpp
bool deleteWebhook(Snowflake<Webhook> webhookID, std::string webhookToken = "");
```

Deletes a webhook with an optional webhook token

#### Parameters
<table>
  <tbody>
    <tr><td><strong>webhookID</strong></td>
      <td>The id of the webhook you want to delete</td></tr>
    <tr><td><strong>webhookToken</strong></td>
      <td>The optional token of the webhook you want to delete</td></tr>
  </tbody>
</table>

#### Return value
Returns ``true`` on success

#### Other Details
[Declared in `client.h`](https://github.com/NoNamer64/sleepy-discord/blob/master/include/sleepy_discord/client.h) and [defined in `endpoints.cpp`](https://github.com/yourWaifu/sleepy-discord/blob/master/sleepy_discord/endpoints.cpp)

Uses [Delete Webhook](https://discordapp.com/developers/docs/resources/webhook#delete-webhook)
Uses [Delete Webhook with Token](https://discordapp.com/developers/docs/resources/webhook#delete-webhook-with-token)

### executeWebhook

```cpp
ObjectResponse<Webhook> executeWebhook(Snowflake<Webhook> webhookID, std::string webhookToken, std::string content, bool wait = false, std::string username = "", std::string avatar_url = "", bool tts = false);
```

Executes a webhook with a webhook token, reads the message from the string

#### Parameters
<table>
  <tbody>
    <tr><td><strong>webhookID</strong></td>
      <td>The id of the webhook you want to execute</td></tr>
    <tr><td><strong>webhookToken</strong></td>
      <td>The webhook token of the webhook you want to execute</td></tr>
    <tr><td><strong>content</strong></td>
      <td>The content of the message</td></tr>
    <tr><td><strong>wait</strong></td>
      <td>Whether it should wait for server confirmation of message send before response</td></tr>
    <tr><td><strong>username</strong></td>
      <td>The override of the default username of the webhook</td></tr>
    <tr><td><strong>avatar_url</strong></td>
      <td>The override of the default avatar of the webhook</td></tr>
    <tr><td><strong>tts</strong></td>
      <td>Whether the message is a TTS message</td></tr>
  </tbody>
</table>

#### Return value
Returns a ``Webhook`` object

#### Other Details
[Declared in `client.h`](https://github.com/NoNamer64/sleepy-discord/blob/master/include/sleepy_discord/client.h) and [defined in `endpoints.cpp`](https://github.com/yourWaifu/sleepy-discord/blob/master/sleepy_discord/endpoints.cpp)

Uses [Execute Webhook](https://discordapp.com/developers/docs/resources/webhook#execute-webhook)

### executeWebhook

```cpp
ObjectResponse<Webhook> executeWebhook(Snowflake<Webhook> webhookID, std::string webhookToken, filePathPart file, bool wait = false, std::string username = "", std::string avatar_url = "", bool tts = false);
```

Executes a webhook with a webhook token, reads the message from a file

#### Parameters
<table>
  <tbody>
    <tr><td><strong>webhookID</strong></td>
      <td>The id of the webhook you want to execute</td></tr>
    <tr><td><strong>webhookToken</strong></td>
      <td>The webhook token of the webhook you want to execute</td></tr>
    <tr><td><strong>file</strong></td>
      <td>The file containing the message</td></tr>
    <tr><td><strong>wait</strong></td>
      <td>Whether it should wait for server confirmation of message send before response</td></tr>
    <tr><td><strong>username</strong></td>
      <td>The override of the default username of the webhook</td></tr>
    <tr><td><strong>avatar_url</strong></td>
      <td>The override of the default avatar of the webhook</td></tr>
    <tr><td><strong>tts</strong></td>
      <td>Whether the message is a TTS message</td></tr>
  </tbody>
</table>

#### Return value
Returns a ``Webhook`` object

#### Other Details
[Declared in `client.h`](https://github.com/NoNamer64/sleepy-discord/blob/master/include/sleepy_discord/client.h) and [defined in `endpoints.cpp`](https://github.com/yourWaifu/sleepy-discord/blob/master/sleepy_discord/endpoints.cpp)

Uses [Execute Webhook](https://discordapp.com/developers/docs/resources/webhook#execute-webhook)

### sendTyping

```cpp
bool sendTyping(Snowflake<Channel> channelID);
```

Sets the typing indicator for the current user, typing is stopped after a few seconds or if the [sendMessage](#sendmessage) method is called

#### Parameters
<table>
  <tbody>
      <tr><td><strong>channelID</strong></td>
        <td>The id of the channel the current user is typing on</td></tr>
  </tbody>
</table>

#### Return value
Returns ``true`` on succes

#### Other Details
[Declared in `client.h`](https://github.com/NoNamer64/sleepy-discord/blob/master/include/sleepy_discord/client.h) and [defined in `endpoints.cpp`](https://github.com/yourWaifu/sleepy-discord/blob/master/sleepy_discord/endpoints.cpp)

Uses [Trigger Typing Indicator](https://discordapp.com/developers/docs/resources/channel#trigger-typing-indicator)

### updateStatus

```cpp
void updateStatus(std::string gameName = "", uint64_t idleSince = 0);
```

Updates the current user's status

#### Parameters
<table>
  <tbody>
      <tr><td><strong>gameName</strong></td>
        <td>The text right under the username, without the ``Playing``</td></tr>
      <tr><td><strong>idleSince</strong></td>
        <td>unix time in milliseconds when the client when idle, or null if the client is not idle</td></tr>
  </tbody>
</table>

### isReady

```cpp
const bool isReady();
```

Tells you if the ready event has ocurred or not

#### Return value
``true`` if the ready event ocurred

### isQuiting

```cpp
const bool isQuiting();
```

Tells you if the quit event has ocurred or not

#### Return value
``true`` if the quit event ocurred

### isBot

```cpp
const bool isBot();
```

Tells you if the client is a bot

#### Return value
``true`` if the client is a bot

### isRateLimited

```cpp
const bool isRateLimited();
```

Tells you if the rate of messages is limited

#### Return value
``true`` if the rate of messages is limited

### setShardID

```cpp
void setShardID(int _shardID, int _shardCount);
```

Sets the shard id and shard count for a client

<aside class="note">
Function must be called before run or reconnect.
</aside>

### quit

```cpp
void quit();
```

Lets you disconnect from discord and stops the client

<h3 id="discordclient-run">run</h3>

```cpp
virtual void run();
```

For more information, check out [custom websockets](#custom-websockets)

### request
<aside class="warning">
Please do not use unless you have a good reason.
</aside>

```cpp
Response request(const RequestMethod method, const std::string url, const std::string jsonParameters = "", const std::initializer_list<Part>& multipartParameters = {});
Response request(const RequestMethod method, const std::string url, const std::initializer_list<Part>& multipartParameters);
```

Used to make a request to Discord. For more information, see [Session](#session).

### path
```cpp
const std::string path(const char* source, ...);
```

Usually used with the request function. This creates a path by putting together the url and the parameters.

#### Parameters
<table>
  <tbody>
      <tr><td><strong>source</strong></td>
        <td>The link with ``{`` and ``}`` to specify where to place the parameters</td></tr>
      <tr><td><strong>...</strong></td>
        <td>The parameters in std::string. Parameters should go in order from when they appear in source</td></tr>
  </tbody>
</table>

<aside class="note">
Any parameter that's not a std::string will cause issues. If you are using a hard coded string, like ``"this"``, make sure it's a std::string.
</aside>

#### Return value
The url with all ``{``, ``}``, and in between replaced with the parameters.

## Events

Events are functions that can be overridden that are called when an event such as receiving a message occur. For example, the function onMessage is an event.

### onReady

```cpp
virtual void onReady(std::string* jsonMessage);
```

### onServer
```cpp
virtual void onServer(SleepyDiscord::Server server);
```
```cpp
#include <sleepy_discord.h>

#include <iostream>
#include <vector>

class MyClientClass : public SleepyDiscord::DiscordClient {
public:
	using SleepyDiscord::DiscordClient::DiscordClient;

	void onServer(SleepyDiscord::Server server) {
		serverList.push_back(server);
		std::cout << "New server, name: " << server.name << "\n";
	}

private:
  std::vector<SleepyDiscord::Server> serverList;
};

int main() {
	MyClientClass client("token", 2);
	client.run();

	return 0;
}
```

Called when a guild is created/join the client

#### Parameters
<table>
  <tbody>
    <tr><td><strong>server</strong></td>
      <td>Server object with all the info from the <a href="https://discordapp.com/developers/docs/topics/gateway#guild-create">GUILD_CREATE event</a></td></tr>
  </tbody>
</table>

### onBan
```cpp
virtual void onBan(std::string *jsonMessage);
```
```cpp
#include <sleepy_discord.h>

class MyClientClass : public SleepyDiscord::DiscordClient {
public:
	using SleepyDiscord::DiscordClient::DiscordClient;

	void onBan(std::string \*jsonMessage) {
		std::cout << "New ban, json data: " << \*jsonMessage << "\n";
	}
};

int main() {
	MyClientClass client("token", 2);
	client.run();

	return 0;
}
```

Called when a member is banned from a server

#### Parameters
<table>
  <tbody>
    <tr><td><strong>jsonMessage</strong></td>
    <td>This is the raw data for the event, this should be changed when a proper object is implemented </td>
  </tbody>
</table>

### onUnban
```cpp
virtual void onUnban(std::string \*jsonMessage);
```
```cpp
#include <sleepy_discord.h>

class MyClientClass : public SleepyDiscord::DiscordClient {
public:
	using SleepyDiscord::DiscordClient::DiscordClient;

	void onUnban(std::string \*jsonMessage) {
		std::cout << "New Unban, json data: " << \*jsonMessage << "\n";
	}
};

int main() {
	MyClientClass client("token", 2);
	client.run();

	return 0;
}
```

Called when an user is unbaned from the server

#### Parameters
<table>
  <tbody>
    <tr><td><strong>jsonMessage</strong></td>
    <td>This is the raw data for the event, this should be changed when a proper object is implemented </td>
  </tbody>
</table>

### onMessage

```cpp
virtual void onMessage(SleepyDiscord::Message message);
```
```cpp
#include <sleepy_discord>

class MyClientClass : public SleepyDiscord::DiscordClient {
public:
	using SleepyDiscord::DiscordClient::DiscordClient;

	void onMessage(SleepyDiscord::Message m) {
		if (m.startsWith("whcg hello")) {
			SleepyDiscord::Message message = sendMessage(message.channelID, "Hello " + message.author.username);
			std::cout << message.content;
		}
	}
};

int main() {
	MyClientClass client("token", 2);
	client.run();
}
```
>Input: Message received

```shell
whcg hello
```
>Possible Output: Message sent

```shell
Hello Sleepy Flower Girl
```

Called when the Client receives a new message.

#### Parameters
<table>
  <tbody>
      <tr><td><strong>message</strong></td>
        <td>Message object with all the info from the <a href="https://discordapp.com/developers/docs/resources/channel#message-object">MESSAGE_CREATE event</a></td></tr>
  </tbody>
</table>

### onEditMessage
```cpp
virtual void onEditMessage(std::string \*jsonMessage);
```
```cpp
#include <sleepy_discord.h>

class MyClientClass : public SleepyDiscord::DiscordClient {
public:
	using SleepyDiscord::DiscordClient::DiscordClient;

	void onEditMessage(std::string \*jsonMessage) {
		std::cout << "New edit message, json data: " << \*jsonMessage << "\n";
	}
};

int main() {
	MyClientClass client("token", 2);
	client.run();

	return 0;
}
```

Called when a user edit a message

#### Parameters
<table>
  <tbody>
    <tr><td><strong>jsonMessage</strong></td>
    <td>This is the raw data for the event, this should be changed when a proper object is implemented </td>
  </tbody>
</table>

### onQuit

```cpp
virtual void onQuit();
```

Happens when the client is quitting and after disconnecting from Discord

### schedule

```cpp
virtual Timer schedule(TimedTask                 code   , const time_t millisecondsTilDueTime);
inline  Timer schedule(TimedTask                 code   , const time_t milliseconds, AssignmentType mode);
inline  Timer schedule(void (BaseDiscordClient::*code)(), const time_t milliseconds, AssignmentType mode = TilDueTime);
```
```cpp
Snowflake<Channel> channel = message.channelID;
sendMessage(channel, "Another message will be sent in 5 seconds from now.");
schedule([this, channel]() {
	this->sendMessage(channel, "5 seconds has pasted");
}, 5000);
```

Creates a timer that will execute a function after the timer expires. Based on JavaScript's setTimeout()

#### Parameters
<table>
	<tbody>
		<tr><td><strong>code</strong></td>
			<td>Function that will be called when times up</td></tr>
		<tr><td><strong>millisecondsTilDueTime</strong></td>
			<td>The amount of milliseconds before execute code</td></tr>
		<tr><td><strong>milliseconds</strong></td>
			<td>Depends on mode</td></tr>
		<tr><td><strong>mode</strong></td>
			<td>When this is EpochTime, code will execute at milliseconds since epoch. Else, code will execute at milliseconds since schedule was called</td></tr>
	</tbody>
</table>

#### Return

See Timer below.

#### Timer
Stores needed timer function. However, this does not store the function will be called when times up.

#### TimedTask
Stores function that will be called when times up

#### AssignmentType

```cpp
enum AssignmentType : bool {
	TilDueTime = 0,
	EpochTime  = 1,
};
```

Changes what ``milliseconds`` represents in milliseconds

### sleep

```cpp
virtual void sleep(const unsigned int milliseconds);
```

<aside class="warning">
Deprecated, use schedule instead
</aside>

#### Parameters
<table>
  <tbody>
      <tr><td><strong>milliseconds</strong></td>
        <td>The amount of time to sleep for in milliseconds</td></tr>
  </tbody>
</table>

Called when the client needs to wait a bit

### onError

```cpp
virtual void onError(ErrorCode errorCode, const std::string errorMessage);
```

Happens when an error is detected

#### Parameters
<table>
  <tbody>
      <tr><td><strong>errorCode</strong></td>
        <td>The number associated with the error</td></tr>
      <tr><td><strong>errorMessage</strong></td>
        <td>The reason or message for the given error code</td></tr>
  </tbody>
</table>

# Discord Objects

Objects used to represent things from Discord, these include things like messages, users, server, etc.

## Snowflake

```cpp
template <typename DiscordObject>
struct Snowflake {
```

Most Discord Objects have ids, these ids have the type called Snowflake. Snowflakes are 64 bit unsigned ints, currently Sleepy Discord stores them as strings. This is because Discord sends and receives Snowflakes as strings, because unsigned 64 bit integer support is not something every language has. By passing snowflakes as a string, you can guarantee that the receiving language will not try to change it. For example, languages like PHP stores all numbers as doubles or 64 bit floats. In theory, the json standard supports 53 bit signed integers.

### Structure
<pre>
<img src="images/UxWvdYD.png">
</pre>
<table>
  <tbody>
      <tr><td><strong>Timestamp</strong></td>
        <td>42 bits - milliseconds since the first second of 2015</td></tr>
      <tr><td><strong>Internal worker ID</strong></td>
        <td>5 bits - Internally Discord has servers that create snowflakes, this id unique to each generating sever</td></tr>
      <tr><td><strong>Internal process ID</strong></td>
        <td>5 bits - Same thing as the worker ID but unique to each generating process</td></tr>
      <tr><td><strong>Increment</strong></td>
        <td>10 bits - a number that is incremented for every generated ID on the process</td></tr>
  </tbody>
</table>

### But if C++ has support for unsigned 64 bit integer, then why does Sleepy Discord store them as strings?
That's a good question. The fact that they are given to the client as strings and send to Discord as a string, is the main reason why. However, the disadvantages are that the strings take up more memory then 64 bits, and that you will need to convert them to an int if you want to so some math operations with them. However, you cannot send Snowflakes as integers to Discord, as that will give you an error.

<h3 id="snowflake-comparison-operators">operator==, !=</h3>

```cpp
inline bool operator==(const Snowflake& right);
inline bool operator==(const char* right);

inline bool operator!=(const Snowflake& right);
inline bool operator!=(const char* right);
```

#### Return value
``true`` when comparison is true, otherwise ``false``

### operator const std::string&

```cpp
operator const std::string&();
```

#### Return value
Returns the snowflake as a string of numbers.

## Message

```cpp
struct Message : public DiscordObject {
```

An object that represents a message from Discord. Also very similar to [the message object from the API](https://discordapp.com/developers/docs/resources/channel#message-object)

<h3 id="message-constructor">(constructor)</h3>
```cpp
Message(const std::string * rawJson);
Message(BaseDiscordClient* client, std::string channelID, std::string message, bool tts = false);
```

Initializes the Message object. However the two constructors do different things. As the 2nd one also sends a message and initializes the message object, the first one just initializes the message object. In the 2nd constructor's implementation, it uses the first constructor to initializes the message object.

### startsWith
```cpp
bool startsWith(char* test);
```

#### Parameters
<table>
  <tbody>
      <tr><td><strong>test</strong></td>
        <td>the string that to compare the beginning of the message to</td></tr>
  </tbody>
</table>

#### Return value
``true`` when the message starts with the given string

### length

```cpp
int length();
```

#### Return value
The content length of the message

### isMentioned

```cpp
bool isMentioned(const std::string id);
bool isMentioned(User& _user);
```

#### Parameters
<table>
  <tbody>
      <tr><td><strong>id</strong></td>
        <td>The id of the user that you want to check that they were mentioned or not</td></tr>
      <tr><td><strong>_user</strong></td>
        <td>The user object of the user you want to check that they were mentioned or not </td></tr>
  </tbody>
</table>

#### Return value
``true`` if the user was mentioned

### send

```cpp
Message send(BaseDiscordClient * client);
```

#### Parameters
<table>
  <tbody>
      <tr><td><strong>client</strong></td>
        <td>The client that will be used to send the message</td></tr>
  </tbody>
</table>

#### Return value
The Message you just sent as a Message object

### reply

```cpp
Message reply(BaseDiscordClient * client, std::string message, bool tts = false);
```

sends a message to same channel that the parent message is on

#### Parameters
<table>
  <tbody>
      <tr><td><strong>client</strong></td>
        <td>The client that will be used to send the reply</td></tr>
      <tr><td><strong>message</strong></td>
        <td>The message to use to reply</td></tr>
      <tr><td><strong>tts</strong></td>
        <td>Short for Text to Speech. When this is true, anyone with text to speech messages on will have their computer read the message out load to the them</td></tr>
  </tbody>
</table>

#### Return value
The Message you just sent as a Message object

<h3 id="message-comparison-operators">operator==</h3>
```cpp
bool operator==(const std::string& message);
```

Compares the ids of two messages

#### Parameters
<table>
  <tbody>
      <tr><td><strong>message</strong></td>
        <td>The message that is being compared</td></tr>
  </tbody>
</table>

#### Return value
``true`` when the ids of the two messages are the same

## User
```cpp
struct User : public DiscordObject {
  ~User();
  User();
  User(const std::string * rawJSON);
```

Based on [the object with the same name from the api](https://discordapp.com/developers/docs/resources/user#user-object)

<h3 id="user-comparison-operators">operator==</h3>

```cpp
bool operator==(const User& rightUser);
```

Compares the id of two Users

#### Parameters
<table>
  <tbody>
      <tr><td><strong>rightUser</strong></td>
        <td>The User that is being compared</td></tr>
  </tbody>
</table>

#### Return value
``true`` when the two Users have the same id

# Voice
[For a step by step guild on using voice, go to here](voice.html).
[](TO DO Add examples for voice)

## VoiceContext

```cpp
SleepyDiscord::VoiceContext& context = myClient.createContext("channelID", "serverID");
myClient.connectToVoiceChannel(context);
```

Represents the information needed to connect to a voice channel, such as the channelID and serverID.

## Base<wbr>Voice<wbr>Event<wbr>Handler

```cpp
class VoiceEventHandler : public SleepyDiscord::BaseVoiceEventHandler {
public:
	VoiceEventHandler() {}
	void onReady(SleepyDiscord::VoiceConnection& connection) {
		connection.getDiscordClient().sendMessage("Connected to a voice channel");
	}
}
VoiceEventHandler voiceEventHandler;
```

Class with virtual functions for handling events related to voice.

### Events

All events will give you a reference to the VoiceConnection.

### onReady

### onEndSpeaking

### onHeartbeat

### onHeartbeatAck

## VoiceConnection

Class that connects to the voice channel and used for sending and receiving audio from the voice channel. The Discord client will create this for you. You get one from your VoiceEventHandler.

## AudioSources

Class representing the data that will be sent when speaking. When speaking, VoiceConnection will call AudioSource::read and use the audio data gotten from that call and send it to Discord's voice server.

# Session

```cpp
class GenericSession {
```

```cpp
typedef CPRSession Session;
```

```cpp
typedef CustomSession Session;
```

Session is a class that wraps any http library, for now the library only supports cpr. However this can easily change in the future thanks to the Session class.

Declared in ``http.h``

#### Member types
<table>
  <tbody>
      <tr><td><strong><a href="#response">Response</a></strong></td>
        <td>When you make a request, it sends back a response. This holds the response from the request.</td></tr>
      <tr><td><strong>Part</strong></td>
        <td>Used for multipart requests, is stores the name and file or value</td></tr>
  </tbody>
</table>

## Response

```cpp
struct Response {
	int32_t statusCode;
	std::string text;
	std::map<std::string, std::string> header;
};
```

When you make a request, a response is returned. The Response struct stores the response from a request.

<aside class="note">
Response is a separate part of Session
</aside>

There are a few class derived from Response as you can see below.

### StandardResponse

```cpp
struct StandardResponse : Response {
```

Used as a base for classes that are derived from Response.

### BooleanResponse

```cpp
template<class BooleanFunction = StandardBooleanResponseFunction>
struct BooleanResponse : public StandardResponse {
```

```cpp
BooleanResponse<> response = deleteMessage("channelID", "messageID");
bool wasSuccessful = response;
//you may also do this
wasSuccessful = deleteMessage("channelID", "messageID");
```

Can implicitly convert from Response to bool.

#### Template Parameters
<table>
  <tbody>
      <tr><td><strong>BooleanFunction</strong></td>
        <td>Class that acts like a function using the function call operator overload to convert a ``const Response&`` into a ``bool``</td></tr>
  </tbody>
</table>

#### Resps

```cpp
BooleanResponse<EmptyResp>
```

Resps, short for Responses, BooleanFunctions for status codes that are used to signal success. This should allow you see the response that Discord returns with added features.

### ObjectResponse

```cpp
template<class Type>
struct ObjectResponse : public StandardResponse {
```

```cpp
ObjectResponse<Message> response = sentMessage("channelID", "Hello");
Message message1 = response;
//you may also do this
Message message2 = sentMessage("channelID", "Hello again");
```

Can implicitly convert from Response into Type.

#### Template Parameters
<table>
  <tbody>
      <tr><td><strong>Type</strong></td>
        <td>Class with a constructor with the parameter list that can take in just a Response*</td></tr>
  </tbody>
</table>

#### cast
```cpp
Type cast();
```

```cpp
std::string sentMessage = sendMessage.cast().content;
```

returns Type from Response.

### ArrayResponse

```cpp
template <class Type>
using ArrayResponse =
```

```cpp
ArrayResponse<Message> response = getMessages("channelID", na, "");
std::vector<Message> messages = response;
```

Can implicitly convert from Response into a Container of Type objects.

## Functions

### setUrl

```cpp
virtual void setUrl(const std::string& url) = 0;
```

### setBody

```cpp
virtual void setBody(const std::string* jsonParameters) = 0;
```

#### Parameters
<table>
  <tbody>
      <tr><td><strong>jsonParameters</strong></td>
        <td>The body of the Session, usually a json</td></tr>
  </tbody>
</table>

### setHeader

```cpp
virtual void setHeader(const std::vector<SleepyDiscord::HeaderPair>& header) = 0;
```

#### Parameters
<table>
  <tbody>
      <tr><td><strong>header</strong></td>
        <td>A vector of stuff in the header</td></tr>
  </tbody>
</table>

#### HeaderPair
Represents one line of the header
<table>
  <tbody>
      <tr><td><strong>name</strong></td>
        <td>The name of the value, or the left of the header field</td></tr>
      <tr><td><strong>value</strong></td>
        <td>The value, or the right of the header field</td></tr>
  </tbody>
</table>

### setMultipart

```cpp
virtual void setMultipart(const std::initializer_list<Part>& parts) = 0;
```

### Request Methods

Everything else in the Session class makes the request, and returns the response from the request. However each one uses a different request method. [Here's a useful wikipedia about them.](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Request_methods)

#### Return value
[The response](#response)

#### Post

```cpp
virtual Response Post() = 0;
```

#### Patch

```cpp
virtual Response Patch() = 0;
```

#### Delete

```cpp
virtual Response Delete() = 0;
```

#### Get

```cpp
virtual Response Get() = 0;
```

#### Put

```cpp
virtual Response Put() = 0;
```

## Custom Session

```cpp
class CustomSession : public GenericSession {
```

Sessions are used for http requests, it's essentially a wrapper for any http library for Sleepy Discord. CustomSession is wrapper for a wrapper of http requests and responses. [To learn more about Sessions, click here.](#session)

#### Member types
<table>
  <tbody>
      <tr><td><strong>CustomInit</strong></td>
        <td>A function pointer to a function that returns a new Session</td></tr>
  </tbody>
</table>

<h3 id="custom-session-constructor">(constructor)</h3>

```cpp
static CustomInit init;
CustomSession() : session(init()) {}
```

> This how the CustomSession constructor calls your custom Session.

```cpp
class mySession : public SleepyDiscord::GenericSession{
	...  //imagine a filled out Session class
}
SleepyDiscord::CustomInit SleepyDiscord::Session::init = []()->SleepyDiscord::GenericSession* { return new mySession; };	//init the custom session
```

The constructor of the CustomSession class calls init to get a pointer to a new Session.

# Custom Websockets

Without websockets, Discord can't get anything in real time, because http only does things after a request. Think of it as the difference between active and passive. Just like CustomSession, Sleepy Discord's websockets are customizable. Right now, there isn't a special class for websockets, it's part of the ``BaseDiscordClient`` class.

<h2 id="custom-websockets-functions">Functions</h2>

<h3 id="custom-websockets-run">run</h3>

```cpp
virtual void run();
```

A function called by the user to run the websocket client when there's 2 or less threads that can be used for Sleepy Discord

<aside class="warning">
All functions <b>below</b> should be specified as private
</aside>

### connect

```cpp
virtual bool connect(const std::string & uri) { return false; }
```

Called when Sleepy Discord wants to connect.

#### Return value
True on a successful connection.

### disconnect
```cpp
virtual void disconnect(unsigned int code, const std::string reason) {}
```

The function that Sleepy Discord uses to disconnect

<h3 id="custom-websockets-send">send</h3>
```cpp
virtual void send(std::string message);
```

A function used for sending things like heartbeats and status updates

### runAsync
```cpp
virtual void runAsync();
```

Runs the websocket client on another thread. This is the function that Sleepy Discord calls when it's told to run on 3 or more threads. Generally, this function should just make a new thread and call run on the new thread.

<h2 id="sleepy_lock_client_functions">SLEEPY_<wbr>LOCK_<wbr>CLIENT_<wbr>FUNCTIONS</h2>

```cpp
class WebSocketDiscordClient : public BaseDiscordClient {
private:
	SLEEPY_LOCK_CLIENT_FUNCTIONS
};
```

A macro that is a must for any Discord Clients that will be used by others, that may include you. It specifies functions that a normal user should not touch as private.

# Custom UDP

# Preprocessor Directives

Sleepy Discord uses some preprocessor directives such as ``#define`` and ``#ifdef``. This is so that Sleepy Discord can be compiled in many different situations. If you are having trouble compiling Sleepy Discord, these might help, but make sure you know what they do because they will disable or add features.

<h2 id="sleepy_one_thread">SLEEPY_<wbr>ONE_<wbr>THREAD</h2>

```make
SLEEPY_ONE_THREAD
-DSLEEPY_ONE_THREAD
```
Disables anything that has to do with threads, because threads or ``std::threads`` don't work on everything. Currently there's no way to add in thread support of your own device yet.

<h2 id="sleepy_custom_session">SLEEPY_<wbr>CUSTOM_<wbr>SESSION</h2>

```make
SLEEPY_CUSTOM_SESSION
-DSLEEPY_CUSTOM_SESSION
```
Makes Sleepy Discord use the CustomSession Class for sessions, This allows you to use any http library you like to use. [Click here for info on the CustomSession Class](#custom-session)

<h2 id="sleepy_use_hard_coded_gateway">SLEEPY_<wbr>USE_<wbr>HARD_<wbr>CODED_<wbr>GATEWAY</h2>

```make
SLEEPY_USE_HARD_CODED_GATEWAY
-DSLEEPY_USE_HARD_CODED_GATEWAY
```
This makes Sleepy Discord skip connecting to ``api/gateway`` to get the gateway and instead it uses the gateway that is hard coded into Sleepy Discord.
