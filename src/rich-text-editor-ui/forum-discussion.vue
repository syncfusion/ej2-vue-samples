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
    width: 90%;
    margin: 0 auto;
    border: 1px solid var(--color-sf-border, rgb(var(--color-sf-outline-variant, 196, 199, 197)));
    border-radius: 8px;
    background: var(--color-sf-content-bg-color, rgb(var(--color-sf-surface, 255, 255, 255)));
    padding: 20px;
}

.forum-header {
    display: flex;
    align-items: center;
    gap: 8px;
    padding-bottom: 14px;
    border-bottom: 1px solid var(--color-sf-border, rgb(var(--color-sf-outline-variant, 196, 199, 197)));
    margin-bottom: 20px;
}

.forum-icon {
    font-size: 18px;
}

.forum-title {
    font-size: 17px;
    font-weight: 700;
    color: var(--color-sf-content-text-color, rgb(var(--color-sf-on-surface, 28, 27, 31)));
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
    font-size: 14px;
}

.button-group .e-outline {
    border: 1px solid var(--color-sf-border-dark, rgb(var(--color-sf-outline-variant, 196, 199, 197)));
    background: transparent;
    color: var(--color-sf-content-text-color, rgb(var(--color-sf-on-surface, 28, 27, 31)));
}

.button-group .e-outline:hover {
    background: var(--color-sf-content-bg-color-hover, transparent);
    border-color: var(--color-sf-border-dark, rgb(var(--color-sf-outline, 121, 116, 126)));
}

.comments-container {
    border-top: 1px solid var(--color-sf-border, rgb(var(--color-sf-outline-variant, 196, 199, 197)));
    padding-top: 16px;
}

.comments-title {
    font-size: 15px;
    font-weight: 700;
    display: block;
    margin-bottom: 14px;
    color: var(--color-sf-content-text-color, rgb(var(--color-sf-on-surface, 28, 27, 31)));
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
    padding: 0 0 16px 2px;
    margin: 0 0 16px 0;
    border-bottom: 1px solid var(--color-sf-border, rgb(var(--color-sf-outline-variant, 196, 199, 197)));
}

.comment-list-item:last-child {
    margin-bottom: 0;
    padding-bottom: 0;
    border-bottom: none;
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
    color: var(--color-sf-content-text-color, rgb(var(--color-sf-on-surface, 28, 27, 31)));
    font-size: 13.5px;
}

.comment-time {
    font-size: 11.5px;
    color: var(--color-sf-content-text-color-alt2, rgb(var(--color-sf-on-surface-variant, 73, 69, 78)));
}

.comment-text {
    color: var(--color-sf-content-text-color, rgb(var(--color-sf-on-surface, 28, 27, 31)));
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
    color: var(--color-sf-icon-color, rgb(var(--color-sf-on-surface-variant, 73, 69, 78)));
}

.action-btn:hover {
    background: var(--color-sf-content-bg-color-hover, rgb(var(--color-sf-primary-container, 234, 221, 255))) !important;
    color: var(--color-sf-primary, rgb(var(--color-sf-primary, 103, 80, 164))) !important;
}

.delete-btn:hover {
    background: var(--color-sf-error-container, rgb(var(--color-sf-error-container, 249, 222, 220))) !important;
    color: var(--color-sf-error, rgb(var(--color-sf-error, 179, 38, 30))) !important;
}

.no-comments {
    color: var(--color-sf-content-text-color-alt2, rgb(var(--color-sf-on-surface-variant, 73, 69, 78)));
    font-size: 13px;
    padding: 10px 0;
}
</style>

