<template>
    <div class="control-section">
        <div class="sample-container">
            <div class="forum-section">
                <div class="forum-header">
                    <span class="forum-icon">&#128172;</span>
                    <span class="forum-title">Discussion</span>
                </div>

                <div class="rte-container">
                    <img
                        id="userAvatar"
                        class="comment-avatar"
                        :src="userAvatar"
                        :alt="userName"
                    />

                    <div class="rte-input">
                        <ejs-richtexteditor-ui
                            ref="editor"
                            placeholder="Write your comment..."
                            :toolbarSettings="toolbarSettings">
                        </ejs-richtexteditor-ui>

                        <div class="button-group">
                            <button
                                class="e-btn e-primary"
                                @click="postComment">
                                Post
                            </button>

                            <button
                                class="e-btn e-outline"
                                @click="discardComment">
                                Discard
                            </button>
                        </div>
                    </div>
                </div>

                <div class="comments-container">
                    <label class="comments-title">Comments</label>

                    <div id="commentsList">
                        <div
                            v-for="comment in comments"
                            :key="comment.id"
                            class="comment-list-item">

                            <div class="comment-item">
                                <img
                                    class="comment-avatar"
                                    :src="comment.avatar"
                                    :alt="comment.author"
                                />

                                <div class="comment-body">
                                    <div class="comment-actions">
                                        <button
                                            class="e-btn e-icons e-copy e-icon-btn e-flat e-small action-btn copy-btn"
                                            title="Copy"
                                            @click="copyComment(comment)">
                                        </button>

                                        <button
                                            class="e-btn e-icons e-trash e-icon-btn e-flat e-small action-btn delete-btn"
                                            title="Delete"
                                            @click="deleteComment(comment.id)">
                                        </button>
                                    </div>

                                    <div class="comment-header">
                                        <span class="comment-author">
                                            {{ comment.author }}
                                        </span>

                                        <span class="comment-time">
                                            commented on
                                            {{ comment.date }}
                                            at
                                            {{ comment.time }}
                                        </span>
                                    </div>

                                    <div
                                        class="comment-text"
                                        v-html="comment.content">
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            v-if="comments.length === 0"
                            class="no-comments">
                            No comments yet.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div id="action-description">
        <p>
            This sample demonstrates a forum discussion component with Rich
            Text Editor UI for creating and editing comments.
        </p>
    </div>

    <div id="description">
        <p>
            The Rich Text Editor UI is integrated into a forum discussion
            interface. Users can write formatted comments using the RTE and
            submit them to display in the comments list. Each comment shows
            the author's avatar, name, timestamp, and provides copy and
            delete actions.
        </p>
    </div>
</template>

<script>
import { RichTextEditorUIComponent } from '@syncfusion/ej2-vue-richtexteditor-ui';

export default {
    name: 'ForumDiscussion',

    components: {
        'ejs-richtexteditor-ui': RichTextEditorUIComponent
    },

    data() {
        return {
            userAvatar: 'src/rich-text-editor-ui/images/1.png',
            userName: 'Selma Rose',
            toolbarSettings: {
                items: ['Bold','Italic','Underline','|','Formats','BulletFormatList','NumberFormatList','|','Link','Undo','Redo'
                ]
            },
            comments: [
                {
                    id: 1,
                    author: 'Jane Smith',
                    avatar: 'src/rich-text-editor-ui/images/2.png',
                    content:
                        'Has anyone tried the new <b>rich text editor</b>? I love how clean the toolbar looks now.',
                    date: 'Sep 3, 2026',
                    time: '02:10 PM'
                },
                {
                    id: 2,
                    author: 'Mark Johnson',
                    avatar: 'src/rich-text-editor-ui/images/3.png',
                    content:
                        'I am also enjoying the updated UI. The <i>inline editing</i> experience feels really smooth!',
                    date: 'Sep 3, 2026',
                    time: '10:24 AM'
                }
            ]
        };
    },

    methods: {
        getEditor() {
            return this.$refs.editor.ej2Instances;
        },

        clearEditor() {
            const editor = this.getEditor();

            editor.value = '';
            editor.refresh();
        },

        postComment() {
            const editor = this.getEditor();

            const content = editor.getHtml();

            if (
                !content ||
                !content.replace(/<[^>]*>/g, '').trim()
            ) {
                return;
            }

            const now = new Date();

            const comment = {
                id: now.getTime(),
                author: this.userName,
                avatar: this.userAvatar,
                content: content,
                date: now.toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                }),
                time: now.toLocaleTimeString('en-US', {
                    hour: '2-digit',
                    minute: '2-digit'
                })
            };

            this.comments = [
                comment,
                ...this.comments
            ];

            this.clearEditor();
        },

        discardComment() {
            this.clearEditor();
        },

        copyComment(comment) {
            navigator.clipboard.writeText(
                comment.content.replace(/<[^>]*>/g, '')
            );
        },

        deleteComment(id) {
            this.comments = this.comments.filter(
                comment => comment.id !== id
            );
        }
    }
};
</script>

<style>
.forum-section {
    width: 80%;
    margin: 0 auto;
    border: 1px solid #e2e4e8;
    border-radius: 8px;
    background: #fff;
    padding: 20px;
}

.forum-header {
    display: flex;
    align-items: center;
    gap: 8px;
    padding-bottom: 14px;
    border-bottom: 1px solid #e2e4e8;
    margin-bottom: 20px;
}

.forum-icon {
    font-size: 18px;
}

.forum-title {
    font-size: 17px;
    font-weight: 700;
    color: #1a1a1a;
}

.rte-container {
    display: flex;
    gap: 12px;
    align-items: flex-start;
    margin-bottom: 28px;
}

.rte-container .comment-avatar {
    flex-shrink: 0;
    margin: 2px 0 0 2px;
}

.rte-input {
    flex: 1;
    min-width: 0;
}

.button-group {
    display: flex;
    gap: 16px;
    margin-top: 10px;
}

.button-group .e-btn {
    padding: 8px 16px;
    font-size: 14px;
}

.button-group .e-outline {
    border: 1px solid #d3d3d3;
    background: #f9f9f9;
    color: #333;
}

.button-group .e-outline:hover {
    background: #f0f0f0;
    border-color: #999;
}

.comments-container {
    border-top: 1px solid #e2e4e8;
    padding-top: 16px;
}

.comments-title {
    font-size: 15px;
    font-weight: 700;
    display: block;
    margin-bottom: 14px;
    color: #1a1a1a;
}

.comment-avatar {
    width: 36px;
    height: 36px;
    min-width: 36px;
    max-width: 36px;
    border-radius: 50%;
    object-fit: cover;
    display: block;
    margin: 2px;
}

#commentsList {
    margin: 0;
    padding: 0;
}

.comment-list-item {
    display: block;
    padding: 0 0 0 2px;
    margin: 0 0 16px 0;
}

.comment-list-item:last-child {
    margin-bottom: 0;
}

.comment-item {
    display: flex;
    flex-wrap: nowrap;
    gap: 12px;
    align-items: flex-start;
    width: 100%;
}

.comment-body {
    flex: 1;
    min-width: 0;
    border: 1px solid #ebedf0;
    border-radius: 5px;
    padding: 10px 40px 10px 14px;
    position: relative;
}

.comment-header {
    display: flex;
    align-items: baseline;
    gap: 8px;
    margin-bottom: 4px;
    flex-wrap: wrap;
}

.comment-author {
    font-weight: 700;
    color: #1a1a1a;
    font-size: 13.5px;
}

.comment-time {
    font-size: 11.5px;
    color: #8a8a8a;
}

.comment-text {
    color: #333;
    line-height: 1.5;
    word-wrap: break-word;
    font-size: 13.5px;
}

.comment-actions {
    position: absolute;
    top: 8px;
    right: 8px;
    display: flex;
    gap: 2px;
}

.action-btn {
    cursor: pointer;
    color: #777;
}

.action-btn:hover {
    background: #e3eefc !important;
    color: #2196F3 !important;
}

.delete-btn:hover {
    background: #fdeaea !important;
    color: #f44336 !important;
}

.no-comments {
    color: #999;
    font-size: 13px;
    padding: 10px 0;
}
</style>

